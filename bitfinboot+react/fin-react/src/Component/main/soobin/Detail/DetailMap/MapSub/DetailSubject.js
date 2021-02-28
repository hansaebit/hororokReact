import React, { Component } from 'react';
import { NavLink ,withRouter} from 'react-router-dom';
import './DetailSubject.css';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import { BiDotsHorizontalRounded } from "react-icons/bi";
// import Modal from './SubMenu/DetailSubModal';
import { FaTrashAlt,FaWrench } from "react-icons/fa";
import store from "../../../../../../redux/store"
import axios from 'axios';

class DetailSubject extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        
    this.state = {
        modalOpen: false,
        rnum:this.props.rnum
    }
   
}

    // Modal open,close
    openModal = () => {
        this.setState({ modalOpen: true })
     
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    
    //리뷰삭제
    delReview=()=>{
        let data=this.state;
        let url="http://localhost:9001/review/deletereview";
        let mnick=this.props.mnick;
        axios.post(url,data)
        .then(res=>{
            alert("delete");
            this.props.history.push("/main/mypage/"+mnick);
        }).catch(err=>{
            console.log("del시오류:"+err);
        })
        
    }



    render() {
        // console.log(this.props.rmnum);
        
        let del_btn=null;
        let up_btn=null;
        if(this.props.rmnum===store.getState().mnum)
        {
            // up_btn=<button className="up_btn">수정</button>
            // del_btn=<button className="del_btn" onClick={this.delReview.bind(this)}>삭제</button>
            up_btn=<IconButton className="up_btn" onClick="">
                        <FaWrench/>
                    </IconButton>

            
            del_btn=<IconButton className="del_btn" onClick={this.delReview.bind(this)}>
                        <FaTrashAlt/>
                    </IconButton>

        }

        return (
            <div className="DetailSubject">
                <div className="DetailSubject-bar">
                    <div className="DetailSubject-box">
                    
                        <div className="DetailSubject-profile" onClick="/main/mypage">
                            <NavLink to={"/main/mypage"} className="DetailSubject-profile-picture">
                                <img src={'http://localhost:9001/profilesave/'+this.props.mpic}/>
                            </NavLink>
                            <div className='DetailSubject-nick'>{this.props.mnick}</div>
                            <div className='DetailSubject-address'>{this.props.resaddr}</div>
                            <div className="updel_btn">
                                
                            </div>
                            <div className='DetailSubject-menu'>
                            
                                {/* <IconButton color="inherit">
                                    <Badge color="secondary" onClick={ this.openModal }>
                                        <BiDotsHorizontalRounded />
                                    </Badge>
                                </IconButton>
                                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                                    <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <FaWrench/>
                                        <span>수정하기</span>
                                    </Badge>
                                    </IconButton> 
                                    <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <FaTrashAlt
                                    className="comment_deletebutton"
                                    />
                                        <span>삭제하기</span>
                                    </Badge>
                                    </IconButton> 
                                </Modal> */}
                            </div>
                        </div>
                        <div className="DetailSubject-sub">{this.props.rcontent}</div>
                    </div>
                    {up_btn}
                                {del_btn}
                </div>
                <input type="text" style={{display:'none'}} name="rnum" value={this.state.rnum}/>
                
            </div>
        )
    }
}
export default withRouter(DetailSubject);