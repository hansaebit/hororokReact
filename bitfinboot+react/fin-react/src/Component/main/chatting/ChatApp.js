import React from 'react';
//import store from "../../redux/store";
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import "./ChatCSS/ChatApp.css";

function ChatApp() {
    return (
        <div className="ChatAppBox">
            <div className="sidePanel">
                <SidePanel/>
            </div>
            <div className="mainPanel">
                <MainPanel/>
            </div>
        </div>
    )
}

export default ChatApp
