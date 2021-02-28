
import store from "../../../redux/store";
import axios from 'axios';
import React,{Component} from 'react';
//import DaumPostcode from "react-daum-postcode";
import './ReviewWrite.css';
import TextareaAutosize from 'react-autosize-textarea';
import { FaTimes,FaImages,FaLocationArrow,FaMapMarkerAlt } from "react-icons/fa";
import { IconButton } from "@material-ui/core";
import { withRouter } from 'react-router-dom';


class ReviewWrite extends Component{

    constructor(props){
        super(props);
       
        this.state={
            rmnum:store.getState().mnum,
            rcontent:'',
            rcategory:'',
            rscore:'',
            resname:'',
            resaddr:'',
            picname:'',
            hashtag:'',
            addr:'',
            


        };

        
    }


    changeEvent=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    //사진업로드
    imageUpload=(e)=>{
        const uploadFile=e.target.files[0];

        const reviewPhoto=new FormData();
        reviewPhoto.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:'http://localhost:9001/review/upload',
            data:reviewPhoto,
            headers: {'Content-Type':'multipart/form-data'}
        }).then(response=>{
            console.log(response.data.photoname);
            console.log(this.state.picname);
            this.setState({
                picname:response.data.photoname
                
            })
        }).catch(err=>{
            console.log("파일업로드시오류:"+err);
        })
    }

    //사진삭제
    handleDelete = () => {
        //let url = "http://localhost:9001/review/delimg"
                this.setState({
                    picname:''
                })
            
    };

    
    
    
    //주소검색 팝업
    ReviewAddr = () => {
        // this.setState({
        //     addr:''
        // })
        new window.daum.Postcode({
          oncomplete: data => {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      
            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            // const addr = ""; // 주소 변수
            // const extraAddr = ""; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === "R") {
              // 사용자가 도로명 주소를 선택했을 경우
              this.setState({
                resaddr: data.roadAddress
              });
            } else {
              // 사용자가 지번 주소를 선택했을 경우(J)
              this.setState({
                resaddr: data.jibunAddress
              });
            }
          }
        }).open();
      };//주소검색끝







    selectRcategory=(e)=>{
        this.setState({
            rcategory: e.target.value
        })
    }

    selectRscore=(e)=>{
        this.setState({
            rscore: e.target.value
        })
    }


    
    //db저장
    onInsertReview=()=>{
        //console.log(store.getState().mnick);
        let mnick=store.getState().mnick;
        this.setState({
            
        });
        
         let data=this.state;

        console.log(this.state.rmnum);
        //let hashtag=this.state.rcontent.match(/#[^\s#]+/g)
        let url="http://localhost:9001/review/insertreview";
            //
           //console.log(this.state.hashtag);
        axios.post(url,data)
        
        .then(res=>{
            
            alert("insert");
            this.setState({
                rmnum:store.getState().mnum,
                rcontent:'',
                rcategory:'',
                rscore:'',
                resname:'',
                resaddr:'',
                picname:'',
                hashtag:'',
            })
            this.props.history.push("/main/mypage/"+mnick);
        }).catch(err=>{
            console.log("insert시오류:"+err);
        })
    }




    render(){


        
        
       
                // let hashtag=this.state.rcontent.match(/#[^\s#]+/g)
       


        


        let url="http://localhost:9001/reviewsave/"

        let img_preview=null;
        let x_sign=null;
        if(this.state.picname!==''){
            img_preview=<img className="img_preview" src={url+this.state.picname}/>
            x_sign=<IconButton className="x_sign"
                        onClick={this.handleDelete.bind(this)}
                    >
                        <FaTimes/>
                    </IconButton>
        }

        return(
            
            <div className="review_con">
            <input type="text" style={{display:'none'}}
                name="rmnum" value={this.state.rmnum}/>
                <div>
                    <div className="review_insertcon">
                        <div>
                            <div className="score_sel">
                                
                                <select onChange={this.selectRscore}
                                     value={this.state.rscore}
                                     name="rscore">
                                    <option value="">별점</option>
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </select>
                            </div>

                            <div className="category_sel"> 
                                <select onChange={this.selectRcategory}
                                    value={this.state.rcategory}
                                    name="rcategory">
                                    <option value="">카테고리</option>
                                    <option value="한식">한식</option>
                                    <option value="중식">중식</option>
                                    <option value="일식">일식</option>
                                    <option value="양식">양식</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                        </div>

                        <div className="content_form">
                            <TextareaAutosize
                                name="rcontent"
                                className="board_content"
                                onChange={this.handleChange}
                                value={this.state.rcontent}
                                minRows={3}
                                type="text"
                                placeholder="호로록!! 해주세요"
                                onChange={this.changeEvent.bind(this)}
                            /> 
                            <br/>
                            
                        </div>

                        <div className="image_preview_con">          
                            {img_preview}{x_sign}
                        </div>
                        <hr className="line"/>
                        <div>
                            <div className="photo_btn">
                                <input style={{display:'none'}} id="input_file_btn"
                                    name = "photo" type="file" 
                                    onChange={this.imageUpload.bind(this)}
                                    required
                                />
                                <label htmlFor="input_file_btn">
                                    <IconButton variant="raised" component="span">
                                        <FaImages/>
                                    </IconButton>
                                </label>
                            </div>
                            <div className="addr_btn">
                                <IconButton onClick={this.ReviewAddr}>
                                    <FaMapMarkerAlt/>
                                </IconButton>
                            </div>
                            <div className="insert_resname">
                                <input placeholder="가게이름"
                                    value={this.state.resname}
                                    name="resname"
                                    onChange={this.changeEvent.bind(this)}
                                />
                            </div>
                            <div className="insert_resaddr">
                                <input placeholder="가게주소"
                                    value={this.state.resaddr}
                                    name="resaddr"
                                    onChange={this.changeEvent.bind(this)}
                                />
                            </div>
                            <div className="insert_btn">
                                <IconButton onClick={this.onInsertReview.bind(this)}>
                                    <FaLocationArrow/>
                                </IconButton>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>


            

            



        )
    }
}

export default withRouter(ReviewWrite);