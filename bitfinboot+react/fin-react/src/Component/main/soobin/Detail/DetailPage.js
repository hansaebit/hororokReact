import React, { Component } from 'react';
import DetailPictureContainer from './DetailPicture/DetailPictureContainer';
import DetailMapSubContainer from './DetailMap/DetailMapSubContainer';
import DetailLikeContainer from './DetailLike/DetailLikeContainer';
import DetailCommentContainer from './DetailComment/DetailCommentContainer';
import './DetailPage.css';


class DetailPage extends Component { 
    constructor(props){
        super(props);
        console.log(this.props.match.params.rnum);

    }
    render() {
        return (
            <div className='dp-body'>
                <div className='dp-box'>
                    <DetailPictureContainer
                    rnum={this.props.match.params.rnum}
                    />
                    <DetailMapSubContainer
                    rnum={this.props.match.params.rnum}
                    />
                    <DetailLikeContainer
                    rnum={this.props.match.params.rnum}
                    />
                    <DetailCommentContainer
                    rnum={this.props.match.params.rnum}
                    />
               </div>
            </div>
        )
    }
}
export default DetailPage;