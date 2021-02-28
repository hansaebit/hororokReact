import React, { Component } from 'react';
import { DetailLike, DetailLikeWrap } from '../DetailIndex';

class DetailLikeContainer extends Component {
    constructor(props){
        super(props);
        this.rnum=this.props.rnum;
    }
    render() {
        return (
            <DetailLikeWrap>
                <DetailLike
                rnum={this.props.rnum}
                />
            </DetailLikeWrap>
        )
    }
}
export default DetailLikeContainer;