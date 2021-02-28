import React, { Component } from 'react';
import "./mainlist.css";
import axios from 'axios';
import {Card } from '@material-ui/core';
import { ListItem, ListItemText, ListItemAvatar, Avatar, CardContent, Typography, Divider, List, Link} from '@material-ui/core';
import store from "../../../redux/store";


class postcard extends Component {
    constructor(props)
    {
        super(props);
        this.state={
          datalist:[],
          hashlist:[],
          commlist:[],
          imgurl:'http://localhost:9001/reviewsave/',
          profurl:'http://localhost:9001/profilesave/',
          likeCount:'',
          likeme:''
        
        }
    } 

    
   // 리뷰번호로 리뷰정보얻기
   getMypageList=()=>{
    let url = "http://localhost:9001/review/postlist";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum
        }
    })
    .then(respones => {
        //console.log(respones.data);
        this.setState({
            datalist:respones.data
        })
    }).catch(error => {
        console.log("포스팅 리스트 오류 : " + error);
    })
    }

    // 리뷰번호로 해시태크 정보얻기
   getHashList=()=>{
    let url = "http://localhost:9001/review/hash";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum
        }
    })
    .then(respones => {
        //console.log(respones.data);
        this.setState({
            hashlist:respones.data
        })
    }).catch(error => {
        console.log("해시태그 리스트 오류 : " + error);
    })
    }

 // 리뷰번호로 댓글 정보얻기

 getCommentList=()=>{  
  axios.get('http://localhost:9001/review/re',{
    params:{
        rnum:this.props.row.rnum
      }
  })
  .then(respones => { 
    console.log(respones.data);  
    this.setState({         
      commlist:respones.data
    })
  }).catch(error => {
      console.log("댓글 리스트 오류 : " + error);
  })
 }

//좋아요 버튼
likeBtn=()=>{
    let url="";
    if(this.state.likeme){
        //console.log(this.state.likeme)
        url="http://localhost:9001/mypage/delLike"
        //console.log("좋아요 취소합니다.")
        this.setState({likeme:!this.state.likeme})
    }else{
        //console.log(this.state.likeme)
        url="http://localhost:9001/mypage/addLike"
        //console.log("좋아요합니다.")
        this.setState({likeme:!this.state.likeme})
    }
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum,
            mnum:store.getState().mnum
        }
    })
    .then(respones => {
        console.log(respones.data);
    }).catch(error => {
        console.log(" 팔로우 에러... : " + error);
    })
}

 //좋아요가져오기
 getLikeData=()=>{
    let url = "http://localhost:9001/mypage/selectLikere";
    axios.get(url,{
        params:{
            rnum:this.props.row.rnum,
            mnum:store.getState().mnum
        }
    })
    .then(respones => {
        //console.log(respones.data);
        this.setState({
            likeCount:respones.data.likeCount,
            likeme:respones.data.likeme
        })
    }).catch(error => {
        console.log("좋아요 오류 : " + error);
    })
}



    componentDidMount(){
        this.getMypageList();
        this.getHashList();
        this.getCommentList();
        this.getLikeData();
    }

    

    render() {
        
        //마이페이지로 이동 
        const goMypage = () => {
            this.props.history.push("/main/mypage/"+this.state.datalist.mnick);
        }
        // 더보기 클릭시 디테일페이지로 이동
        const goDetail = () => {
        this.props.history.push("/main/detail/"+this.state.datalist.rnum);
        }


        return (
            
            <Card className="mainpage_listitem" >
                <ListItem className="mainpage_listitem_header">
                    <ListItemAvatar>
                        <Avatar className="mainlist__header_profphoto"  src={this.state.profurl+this.state.datalist.mpic} alt={this.state.datalist.mpic}/>
                    </ListItemAvatar>
                    <ListItemText  className="mainlist__header_id" onClick={goMypage} primary={this.state.datalist.mnick} secondary={this.state.datalist.resaddr}/>
                </ListItem>
                <div className="mainpage_listitem_body">
                <div className="listitem_img">
                    <img className="postcard_photo" src={this.state.imgurl+this.state.datalist.picname} alt=""  onClick={goDetail}></img>
                    <span>{"⭐".repeat(Number(this.state.datalist.rscore))}</span>
                </div>
                <div className="postcard_txt">
                <div className="listitem_btn">
                    <span>{this.state.datalist.resname}</span>
                    <span onClick={this.likeBtn}>{this.state.likeme ? "❤"+(Number(this.state.likeCount)+1) : "🖤"+this.state.likeCount }</span>
                </div>
                <div className="listitem_btn writeday">
                    <span>{this.state.datalist.rwriteday}</span>
                </div>   
                <CardContent>
                <Typography variant="body2" color="textSecondary" className="listitem_contents" component="p">
                {this.state.datalist.rcontent}
                </Typography>
                </CardContent>
                    <div>
                        {this.state.hashlist.hashtag}
                    {/*    
                     {editMode
                    postData.split(/(#[^\s#]+)/g).map((v, i) => {
                    if (v.match(/(#[^\s#]+)/)) {
                      return <a href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}>{v}</a>
                     }
                   return v;
                   })} */}

                    </div> 
                    </div>
                    </div>          
                                 
                    { this.state.commlist !== null && this.state.commlist !== '' && this.state.commlist !==  0
                   ?  <div>
                   <Divider/>
                <List className="postcard__commend_container">
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar className="postcard__commend_profphoto"  src={this.state.profurl+this.state.commlist.mpic} alt={this.state.commlist.mpic}/>
            </ListItemAvatar>
             <ListItemText className="postcard__commend"
                primary={this.state.commlist.acontent}
               secondary={
               <React.Fragment>              
              <Typography
                component="span"
                variant="body2"
                className="postcard__commend_nick"
                color="textPrimary"
              >
               <Link to={"/main/mypage/"+this.state.commlist.amnick} >{this.state.commlist.amnick} </Link>
              </Typography>
              <dic className="postcard__commend_date">{this.state.commlist.awriteday}</dic>
            </React.Fragment>
            }
              />
                </ListItem>      
                 </List>  
              </div>
              : null 
              
               }
               </Card>
                
                    
        )
    }
}


export default postcard;

