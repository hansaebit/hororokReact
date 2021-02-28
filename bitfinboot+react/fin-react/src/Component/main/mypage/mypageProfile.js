import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class mypageProfile extends Component {
    constructor(props) {
        super(props);
        console.log("mypageProfile 시작");
        console.log(this.props.mnick);
    }
    state = {
        mypageMember:[],
    }


    // 멤버 아이디,팔로워 구하기
    getMypageMember = () => {
        let url = "http://localhost:9001/mypage/myInformation";
        axios.get(url,{
            params:{
                mnick:this.props.mnick
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageMember:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 프로필 출력 : " + error);
        })

    }

    componentDidMount(){
        this.getMypageMember();
    }

    render() {
        return (
            <div className="mypage_container">
                <div className="profile_container">
                    <div className="profile_wrapper">
                        <div className="profile_image">
                            <img src="http://placehold.it/300" alt="프로필사진" />
                        </div>
                        <div className="profile_place">
                            <div className="profile_nameplace">
                                <h1>{this.state.mypageMember.mnick}</h1>
                                <Link to="/main"><Button variant="contained">프로필 편집</Button></Link>
                            </div>
                            <div className="profile_information">
                                <div>게시물 : {this.state.mypageMember.listCount}</div>
                                <div>팔로우 : {this.state.mypageMember.follow}</div>
                                <div>팔로워 : {this.state.mypageMember.follower}</div>
                            </div>
                            <div className="profile_introduce">
                               안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~안녕하세요. 반가워요. ~
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mypageProfile;