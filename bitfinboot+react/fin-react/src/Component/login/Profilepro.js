import React,{Component} from "react"
import store from "../../redux/store";
import "./Profilepro.css";
import propic from "../../image/unprofile.jpg";
import {isPassword} from "./SignupCheck";
import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Profilepro extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            memailid : "",
            mnick : "",
            mpw : "",
            mpwcc :"",
            pswcheck : "",
            checkid : "",
            checkNick : "",
            };
      }


  
  state = {
    profileUrl:this.props.match.url
  }

    //비밀번호 형식 확인

    checkValidPassword = () => {
        let timer;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (!isPassword(this.state.mpw)) {
            this.setState({ isValidPsw: false });
          } else {
            this.setState({ isValidPsw: true });
          }
        }, 500);
      }

      // target value 설정

      createPsw =(e)=> {
        const __mpw = e.target.value;
        this.setState({ mpw: __mpw });
        this.checkValidPassword();    //함수 실행
      };

  
        //비밀번호 함수 확인
     checkMatchPassword = () => {
    let timer;
    if (timer) {
     clearTimeout(timer);
    }
    timer = setTimeout(() => {
     if (this.state.mpw === this.state.mpwcc) {
       this.setState({ isMatchPassword: true });
     } else {
        this.setState({ isMatchPassword: false });
    }
    }, 500);
    };

    repeatPassword =(e)=> {
        const __mpwcc = e.target.value;
        this.setState({ mpwcc: __mpwcc });
        this.checkMatchPassword();    //함수 실행
      };

      //psw update function
      pswUpdate =(e)=>{
        let data = this.state;
        console.log(data);
        let url = "http://localhost:9001/member/pswupdate";

        setTimeout(function() {
          console.log('Works!');
          axios.post(url,data)
        .then(res=>{
          alert("회원가입 수정 성공! 확인해주세요");
        })
        }, 1000);

        
      }

  
  render() {

    let url="http://localhost:9001/profilesave/"
    
  return (
    <>    
    <div className = "profilenn">
      <h4 style={{marginBottom:'30px'}}>비밀번호 수정</h4> 
      <div className="profileTop">
        
        <img className ="profileimg" src={url+store.getState().mpic} alt="없음"style={{width:'100px'}}></img>
        <div className = "profileName">
          <h3>{store.getState().loginId}</h3>
        </div>
      </div>
      <div className="pwdBox">
        <dt><p>이전 비밀번호</p>
            <input name ="mpcc" style={{width : '400px'}} placeholder="비밀 번호" type = "password" ></input>
        </dt>
      
        <dt><p>새 비밀번호 </p>
          <input name ="mpw" style={{width : '400px'}} onChange={e=>this.createPsw(e)} placeholder="비밀 번호" type = "password" ></input>
        </dt>
      
        <dt><p>새 비밀번호 확인</p> 
          <input name ="mpwcc" style={{width : '400px'}} onChange={e => this.repeatPassword(e)} placeholder="비밀 번호 확인" type="password"/>
        </dt>

      </div>
    
      {this.state.mpw ? (this.state.isValidPsw ? ( <span style={{ color: "blue" }}>사용가능한 비밀번호입니다.</span>
        ) : (<span style={{ color: "red" }}>8 ~ 12자 영문, 숫자 조합으로 비번을 입력해 주세요</span>)) : null} <br></br>

      {this.state.mpwcc ? ( this.state.isMatchPassword ? (<span style={{ color: "blue" }}>비밀번호 확인완료</span>
        ) : (<span style={{ color: "red" }}> 비밀번호가 일치하지 않습니다.</span>)) : null} <br></br>
                   
      <Link exact to="/" >
      <Button className="cmbtn" variant="outlined" color="secondary" onClick = {this.pswUpdate.bind(this)} >비밀번호 갱신</Button>
      </Link>
    </div>
    </>
  )
}
}

export default withRouter (Profilepro);