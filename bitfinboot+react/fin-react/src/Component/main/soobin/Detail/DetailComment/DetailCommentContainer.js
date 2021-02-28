import React, { Component } from 'react';
import { DetailComment, DetailCommentWrap } from '../DetailIndex';
import axios from 'axios';

class DetailCommentContainer extends Component {
    constructor(props){
        super(props);
        this.rnum=this.props.rnum;

        this.state = {
            selectData:'',
        }
    }
    //백엔드로부터 num 에 해당하는 데이터 가져오기
    onSelectData=()=>{
        let url='http://localhost:9001/review/detail?rnum='+this.rnum;
        console.log(this.rnum);
        axios.get(url)
        .then(res=>{
            //성공시 dto 리턴값을 받아 데이터에 넣어준다
            this.setState({
                selectData:res.data
            })
            console.log(res.data);
        })
    }

    componentWillMount() {
        this.onSelectData();
    }
    render() {
        const {selectData}=this.state;
        return (
            <DetailCommentWrap>
                <DetailComment
                rnum={this.props.rnum}
                mpic={selectData.mpic}
                />
            </DetailCommentWrap>
        )
    }
}
export default DetailCommentContainer;