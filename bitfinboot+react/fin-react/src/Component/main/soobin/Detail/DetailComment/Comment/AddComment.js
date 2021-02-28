import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaHeart,FaTrashAlt,FaWrench } from "react-icons/fa";
import Modal from './CommentModal/DetailCommentModal';
import { NavLink } from 'react-router-dom';
import './AddComment.css'
import axios from 'axios';

class AddComment extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    console.log(this.props.anum);
this.state = {
    modalOpen: false,
    anum:'',
    acontent:'',
  };
}
//입력시 호출되는 함수
keyChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value
  })
}
//삭제하는 함수 이벤트
onDelete=()=>{
  let url='http://localhost:9001/answer/delete?anum='+this.props.anum;
  axios.delete(url)
  .then(res=>{
      //성공시 디테일페이지로 이동
      window.location.replace("/main/detail/"+this.props.arnum)
  }).catch(err=>{
      console.log("삭제시 오류:"+err);
  })
}
onSelectData=()=>{
  let url='http://localhost:9001/answer/answerdata?anum='+this.props.anum;
  axios.get(url)
  .then(res=>{
      //성공시 dto 리턴값을 받아 데이터에 넣어준다
      this.setState({
          anum:res.data.anum,
          acontent:res.data.acontent,
      })
  })
}

componentWillMount() {
  this.onSelectData();
}
commentUpdate=()=>{
  let data=this.state;
  let url='http://localhost:9001/answer/update';

  axios.post(url,data)
  .then(res=>{
     //성공시 디테일페이지로 이동
     window.location.replace("/main/detail/"+this.props.arnum)
  }).catch(err=>{
      console.log("삭제시 오류:"+err);
  })
}

// Modal open,close
openModal = () => {
    this.setState({ modalOpen: true })
}
closeModal = () => {
    this.setState({ modalOpen: false })
}
    render() {
      const {amnick,acontent,awriteday,handleRemove} = this.props
      //console.log(this.props.arnum);
      return (
        <div className="previous_comment">
          <div className="DetailComment-bar">
          <NavLink to={"/main/mypage"} className="DetailComment-profile">
            <img src={'http://localhost:9001/profilesave/'+this.props.mpic}/>
          </NavLink>
              <span className="add-comment-box">{amnick}</span>
              <span className="add-comment">{acontent}</span>
              <span className="add-awriteday">{awriteday}</span>
            <div className="DetailComment-icons">
              <IconButton color="inherit">
                <Badge color="secondary" onClick={ this.openModal }>
                  <BiDotsHorizontalRounded />
                </Badge>
              </IconButton>
              <IconButton color="inherit" className="comment_likebutton">
                <Badge color="secondary">
                  <FaHeart />
                </Badge>
              </IconButton>                  
            </div>
            <Modal open={ this.state.modalOpen } close={ this.closeModal }>
              <div className="comment-icon-bar">
                <div className="comment-icon-box">
                  <IconButton color="inherit" className="comment-update" onClick={this.commentUpdate.bind(this)}>
                    <Badge color="secondary">
                      <FaWrench/>
                      <div style={{position:"relative",top:"-5px",marginLeft:"10px"}}>댓글 수정하기</div>
                    </Badge>
                  </IconButton> 
                  <IconButton color="inherit" className="comment-delete" onClick={this.onDelete.bind(this)}>
                    <Badge color="secondary">
                      <FaTrashAlt id={awriteday}
                    className="comment_deletebutton"
                    />
                      <div style={{position:"relative",top:"-5px",marginLeft:"10px"}}>댓글 삭제하기</div>
                    </Badge>
                  </IconButton>
                </div> 
              </div>
            </Modal>
          </div>
        </div>
      )
    }
  }
  export default AddComment;