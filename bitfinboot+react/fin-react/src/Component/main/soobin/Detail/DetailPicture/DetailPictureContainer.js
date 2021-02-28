import React, { Component } from 'react';
import { DetailPictureWrap, DetailPicture } from '../../Detail/DetailIndex';

class DetailPictureContainer extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.rnum);

    }
    render() {
        return (
            <DetailPictureWrap>
                <DetailPicture
                rnum={this.props.rnum}
                />
            </DetailPictureWrap>
        )
    }
}
export default DetailPictureContainer;