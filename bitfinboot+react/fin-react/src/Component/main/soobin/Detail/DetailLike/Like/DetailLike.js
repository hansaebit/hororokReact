import React, { Component } from 'react';
import './DetailLike.css'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { FaComments, FaHeart,FaShareAlt } from "react-icons/fa";
import axios from 'axios';
import store from "../../../../../../redux/store";

class DetailLike extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.rnum)
    }

    state = {
        mypageList:[],
        imgurl:'http://localhost:9001/reviewsave/',
        likeCount:'',
        likeme:''
    }
    
    getMypageList=()=>{
        let url = "http://localhost:9001/mypage/getMyListInformation";
        axios.get(url,{
            params:{
                rnum:this.props.rnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageList:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }
    getLikeData=()=>{
        let url = "http://localhost:9001/mypage/selectLikere";
        axios.get(url,{
            params:{
                rnum:this.props.rnum,
                mnum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                likeCount:respones.data.likeCount,
                likeme:respones.data.likeme
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }


    //좋아요 버튼
    likeBtn=()=>{
        let url="";
        if(this.state.likeme){
            console.log(this.state.likeme)
            url="http://localhost:9001/mypage/delLike"
            console.log("좋아요 취소합니다.")
            this.setState({likeme:!this.state.likeme})
        }else{
            console.log(this.state.likeme)
            url="http://localhost:9001/mypage/addLike"
            console.log("좋아요합니다.")
            this.setState({likeme:!this.state.likeme})
        }
        axios.get(url,{
            params:{
                rnum:this.props.rnum,
                mnum:store.getState().mnum
            }
        })
        .then(respones => {
            console.log(respones.data);
        }).catch(error => {
            console.log(" 팔로우 에러... : " + error);
        })
    }

    changelikeButtonColor = () => {
        this.setState({ changeLikeButtonColor: !this.state.changeLikeButtonColor });
      };

    componentDidMount(){
         this.getMypageList();
         this.getLikeData();
    }
    render() {
        return (
            <div className="DetailLike">
                <div className="DetailLike-bar">
                    <div className="DetailLike-box">
                        <span>{"⭐".repeat(Number(this.state.mypageList.rscore))}</span>
                        <span onClick={this.likeBtn}>{this.state.likeme ? "❤"+(Number(this.state.likeCount)+1) : "🖤"+this.state.likeCount }</span>
                    </div>
                </div>
            </div>
       )
    }
}
export default DetailLike;