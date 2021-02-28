import React, { Component } from 'react';
import { FollowingList,FollowingListWrapper } from '../..';
import axios from 'axios';

class FollowingListContainer extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.mnum);
    }
    state = {
        fmnum:'',
        follower:'',
        mnum:'',
        memailid:'',
        mnick:'',
        mpic:'',
        selectData:[],
    }
    onfollowingData=()=>{
        let url='http://localhost:9001/following/list?mnum='+this.props.mnum;
        axios.get(url)
        .then(res=>{
            //console.log(res.data);
            //성공시 dto 리턴값을 받아 데이터에 넣어준다
            this.setState({
                selectData: res.data
                
            })
        }).catch(error => {
            console.log("팔로우 리스트 출력 : " + error);
        })

    }
      
      componentDidMount() {
        this.onfollowingData();
      }
    render() {
        const {selectData} = this.state
        console.log(selectData);
        return (
            <FollowingListWrapper>
                {this.state.selectData.map(item =>
                <FollowingList
                fmnum={item.fmnum}
                follower={item.follower}
                mnum={item.mnum}
                memailid={item.memailid}
                mnick={item.mnick}
                mpic={item.mpic}
                >
                </FollowingList>)}
            </FollowingListWrapper>
             
        )
    }
}
export default FollowingListContainer;