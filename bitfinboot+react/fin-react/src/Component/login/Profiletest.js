import React,{Component} from "react"
import store from "../../redux/store";
import "./Profilemain.css";
import { URL, actionType, mainViewType } from "../../redux/config";
import {NavLink,Route, Switch} from 'react-router-dom';
import PassScr from './Profilepass';
import Profilepro from './Profilepro';

class Profiletest extends Component {
  
  state = {
    profileUrl:this.props.match.url
  }
  
  
  render() {
  return (
    <>
    <div className= "profileaa">
    <div className ="profilemenu">
      <ul className="list_btn">
       <li><NavLink exact activeClassName="active_list_btn" to={this.props.match.url}>프로필 수정</NavLink></li>
       <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/pass`} >비밀번호 수정</NavLink></li>
       <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/pass`} >개인정보 약관</NavLink></li>
       <li><NavLink exact activeClassName="active_list_btn" to={`${this.props.match.url}/pass`} >커뮤니티 가이드라인</NavLink></li>
      </ul>

    </div>
    <div className = "profilecontents">
    <Switch>
        <Route exact path={this.props.match.path} component={PassScr}/>
        <Route exact path={`${this.props.match.path}/pass`} component={Profilepro}/>
    </Switch>
    </div>
    </div>
    </>
  )
}
}

export default Profiletest