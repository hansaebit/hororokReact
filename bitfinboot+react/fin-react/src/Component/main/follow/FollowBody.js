import React, { Component } from 'react';
import Modal from './modal/FollowModal';
import FollowListContainer from './modal/list/FollowListContainer'

class FollowBody extends Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
    }
};
    
    render() {
        return (
            <React.Fragment>
                <Modal open={ this.state.modalOpen } close={ this.closeModal }>
                   <FollowListContainer/>
                </Modal>
            </React.Fragment>
        )
    }
}
export default FollowBody;