import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const header = () => {
    return (
        <div className="Header_container">
            <div className="Header_wrapper">
                <div>FoodStargram</div>
                <input type="text" name="search" placeholder="검색" />
                <ul className="Header_Icons">
                    <li><NavLink exact to="/main" >Home</NavLink></li>
                    <li><NavLink exact to="/main/Chatting" >Chating</NavLink></li>
                    <li><NavLink exact to="/main/mypage" >Mypage</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default header;