import React,{Component} from 'react';
import {NavLink,Route, Switch} from 'react-router-dom';
import axios from 'axios';
import MyAllList from './MyList/MyAllList';
import MyCnList from './MyList/MyCnList';
import MyEtcList from './MyList/MyEtcList';
import MyJapList from './MyList/MyJapList';
import MyKorList from './MyList/MyKorList';
import MyWesList from './MyList/MyWesList';
import './mypage.css';
import store from "../../../redux/store";
import Modal from '../follow/modal/FollowModal';
import FollowListContainer from '../follow/modal/list/FollowListContainer'
import FollowingListContainer from '../follow/modal/list/FollowingListContainer'

class mypage extends Component{
    constructor(props){
        super(props);
        console.log("Mypage 시작");
        console.log(this.props.match.params.mnick);
        console.log(store.getState().mnum);
    }
    state = {
        mnum:'',
        mnick:'',
        mpic:'',
        mintro:'',
        listCount:'',
        follow:'',
        follower:'',
        following:'',
        modalOpen: false,
        modalOpen2: false,
        imgprofile:'http://localhost:9001/profilesave/',
        mypageUrl:this.props.match.url,
        
    }

    // 프로필 가져오기.
    getMypageMember = () => {
        let url = "http://localhost:9001/mypage/myInformation";
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick,
                mynum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mnum:respones.data.mnum,
                mnick:respones.data.mnick,
                mpic:respones.data.mpic,
                mintro:respones.data.mintro,
                listCount:respones.data.listCount,
                follow:respones.data.follow,
                follower:respones.data.follower,
                following:respones.data.following
            })
        }).catch(error => {
            console.log("마이페이지 프로필 출력 : " + error);
        })

    }

    componentDidMount(){
        this.getMypageMember();
    }


    //팔로워 추가
    followbtn=()=>{
        let url="";
        if(this.state.following){
            console.log(this.state.following)
            url="http://localhost:9001/mypage/delFollwer"
            console.log("팔로워 삭제합니다.")
            this.setState({following:!this.state.following})
        }else{
            console.log(this.state.following)
            url="http://localhost:9001/mypage/addFollower"
            console.log("팔로워 추가합니다.")
            this.setState({following:!this.state.following})
        }
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick,
                mynum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
        }).catch(error => {
            console.log(" 팔로우 에러... : " + error);
        })
    }

    // 팔로워,팔로잉 모달
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    // 팔로워,팔로잉 모달
    openModal2 = () => {
        this.setState({ modalOpen2: true })
    }
    closeModal2 = () => {
        this.setState({ modalOpen2: false })
    }

    // 

    // 더보기 클릭시 디테일페이지로 이동
    goDetail = () =>{
        this.props.history.push("/main/profile/");
    }



    render(){
        console.log(this.state.mpic);
        return(
            <div className="mypage_container">
                <div className="hidden_place">
                    
                </div>
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            
                            <img src={this.state.imgprofile+this.state.mpic} alt="" />
                        </div>

                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>{this.state.mnick}</h1>
                                {store.getState().mnick===this.props.match.params.mnick?<button className="profile_edit" onClick={this.goDetail}>프로필 편집</button>
                                :this.state.following?
                                <button onClick={this.followbtn} className="followno_btn">팔로우취소하기</button>
                                :
                                <button onClick={this.followbtn} className="follow_btn">팔로우하기</button>
                                }
                            </div>

                            <div className="profile_information">
                                <div>게시물  <b> {this.state.listCount}</b></div>
                                <div className="profile_information_follow" onClick={ this.openModal2 }>팔로우  <b> {this.state.follow}</b></div>
                                <div className="profile_information_follow" onClick={ this.openModal }>팔로워  <b> {this.state.following? this.state.follower+1: this.state.follower}</b></div>
                            </div>

                            <div className="profile_introduce">
                                {this.state.mintro}
                            </div>

                        </div>
                    </div>
                </div>
                <ul className="mypge_list_btn">
                    <li><NavLink exact activeClassName="active_list_btn" to={this.props.match.url}><b>🍴</b>전체</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/kor`} ><b>🍚</b>한식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/cn`} ><b>🍜</b>중식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/jap`} ><b>🍣</b>일식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/wes`} ><b>🍕</b>양식</NavLink></li>
                    <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/etc`} ><b>🍦</b>기타</NavLink></li>
                </ul>
                <div className="Mypge_list_show">
                    <Switch>
                        <Route exact path={this.props.match.path} component={MyAllList}/>
                        <Route exact path={`${this.props.match.path}/kor`} component={MyKorList}/>
                        <Route exact path={`${this.props.match.path}/cn`} component={MyCnList}/>
                        <Route exact path={`${this.props.match.path}/jap`} component={MyJapList}/>
                        <Route exact path={`${this.props.match.path}/wes`} component={MyWesList}/>
                        <Route exact path={`${this.props.match.path}/etc`} component={MyEtcList}/>
                    </Switch>
                </div>
                <div className="Mypage_list_footer">
                </div>
                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                   <FollowListContainer
                   mnum={this.state.mnum}
                   />
                </Modal>
                <Modal open={ this.state.modalOpen2 } close={ this.closeModal2 }>
                   <FollowingListContainer
                   mnum={this.state.mnum}
                   />
                </Modal>
            </div>
        );
    }

}
export default mypage;