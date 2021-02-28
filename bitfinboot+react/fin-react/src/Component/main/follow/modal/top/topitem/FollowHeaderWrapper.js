import React, { Component } from 'react';
import './FollowHeaderWrapper.css';

class FollowHeaderWrapper extends Component {
    render() {
        return (
            <div className="HeaderWrapper">
               {this.props.children}
            </div>
        )
    }
}
export default FollowHeaderWrapper;