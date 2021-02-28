import React, { Component } from 'react';

class FollowListWrapper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default FollowListWrapper;