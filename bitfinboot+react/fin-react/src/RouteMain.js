import React, { Component,useState } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {header} from './Component/header';
import Follow from './Component/main/follow/FollowBody';
import {list} from './Component/main/mainlist'
import {mypage} from './Component/main/mypage'
import Detail from './Component/main/soobin/Detail/DetailPage'
import {LoginMain,LoginSignup,Profiletest} from './Component/login'
import store from "./redux/store";
import {actionType} from "./redux/config";

import {ChatApp} from "./Component/main/chatting";

import {ReviewWrite} from './Component/main/soobin';


class RouteMain extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            isStaticHeader: true,
            mainview: "mainpage",
            // footerPositionType: "",

            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout

        }

    }



    // Login 함수
    onLogin = () => {
        this.setState({
            logged: true
        });
    }

    // Logout 함수
    onLogout = () => {
        this.setState({
            logged: false
        });
    }

    componentDidMount() {
        store.dispatch({
            type:actionType.setMainView,
        });
    }



    
    render() {
        return (
            <div>
                <Route exact path="/" component={LoginMain}/>
                <Route path="/main" component={header}/>
            <Switch>
                
               <Route exact path="/login/signup" component={LoginSignup}/>

                
                <Route path ="/main/profile" component={Profiletest}/>
                <Route exact path="/main" component={list}/>
                <Route path="/main/mypage/:mnick" component={mypage}/>
                <Route exact path="/main/reviewwrite" component={ReviewWrite}/>
                <Route exact path="/main/chat" component={ChatApp}/>
		        <Route exact path="/main/detail/:rnum" component={Detail}/>

            </Switch>
            </div>
            
        );
    }
}

/* <Route exact path="/main/mypage" component={mypage}/> */
// <Route path="/Home" component={Menu}/></div>
/* <Route exact path="/" component={header}/> */
export default RouteMain;
