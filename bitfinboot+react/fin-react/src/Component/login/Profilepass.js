import React,{Component} from "react"
import store from "../../redux/store";
import axios from 'axios';
import "./Profilepass.css";
import propic from "../../image/unprofile.jpg";
import { NavLink } from 'react-router-dom';
import { URL, actionType, mainViewType } from "../../redux/config";
import Button from '@material-ui/core/Button';

class Profilepass extends Component {

  constructor(props){
    super(props);
   
    this.state={
      file : '',
      previewURL : '',
      mpic : '',
      mnum : store.getState().mnum,
      mintro : '',
    };   
} 

  state = {
    profileUrl:this.props.match.url
  }
  // 이미지 미리보기를 위한 onchange~

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
        previewURL : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  
  //이미지 서버에 수정버튼 누르면 작동
  imageUpload=(e)=>{
    //const uploadFile=e.target.files;

    //let data = this.state;
    const uploadFile=e.target.files[0];

    const reviewPhoto=new FormData();
    reviewPhoto.append("uploadFile",uploadFile);

    axios({
        method:'post',
        url:'http://localhost:9001/member/upload',
        data:reviewPhoto,
        headers: {'Content-Type':'multipart/form-data'}
    }).then(response=>{
        this.setState({
            mpic:response.data.photoname
        })
    }).catch(err=>{
        console.log("파일업로드시오류:"+err);
    })
}

setMpic = (mpic) => {
  console.log("LoginPage setMnum()");
  store.dispatch({
      type: actionType.Mpic,
      // mainView: mainViewType.MainPage
      mpic: mpic,
      logged: true
  });
}

imageupup =(e)=>{

  let data = this.state;

  axios({
    method:'post',
    url:'http://localhost:9001/member/phoupdate',
    data:data,
  }).then(res=>{
    //console.log("workkkkk!");
    this.setMpic(this.state.mpic);
  }).catch(err=>{
    console.log("파일업로드시오류:"+err);
  })

}

profileupdate =(e)=>{


  let data = this.state;

  axios({
    method:'post',
    url:'http://localhost:9001/member/memupdate',
    data:data,
  }).then(res=>{
    //console.log("workkkkk!");
    //this.setMpic(this.state.mpic);
  }).catch(err=>{
    console.log("파일업로드시오류:"+err);
  })



}


createmintro=(e)=>{
  const __mintro = e.target.value;
  this.setState({ mintro: __mintro });
}

createmnick=(e)=>{
  const __mnick = e.target.value;
  this.setState({ mnick: __mnick });
}

  
  render() {

    let url="http://localhost:9001/profilesave/"
    let profile_preview = null;
    if(this.state.file !== ''){
      profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
    }


  return (
    <>    
    <div className = "profilenn">
   

    <div className="picsection">
    <div className ="proimgsec">
    <img className="prooimg" src={url+store.getState().mpic} alt="없음"style={{width:'100px'}}/>
    </div>
    <div className ="piiic">
    <h4>{store.getState().mnick}</h4>
    <input type="file"  accept='image/jpg,impge/png,image/jpeg,image/gif' 
      name='profile_img' className='profile_img'
      onChange={this.imageUpload.bind(this)}/>
     <NavLink exact to="/main" >
      <Button variant="outlined" color="secondary" className="profileupbtn" onClick = {this.imageupup.bind(this)} >프로필사진 수정</Button>
      </NavLink>
      </div>
    </div>
    
      <hr></hr>
      <div className="cmNN">
      <b>닉네임</b>
      <input className="changeNick" name ="mnick" onChange={e=>this.createmnick(e)} value ={store.getState().mnick}></input> <br></br>
      <b>소개글</b>
      <textarea className="changeintro" name ="mintro" onChange={e=>this.createmintro(e)} > </textarea>
      <NavLink exact to="/main" >
      <b></b>
      <Button className="cmbtn" variant="outlined" color="secondary" onClick = {this.profileupdate.bind(this)} >소개글 수정</Button>
      </NavLink>
      </div>
    </div>
    </>
  )
}
}

export default Profilepass