import React, { Component } from 'react';
import { FollowList,FollowListWrapper } from '../../../follow';
import axios from 'axios';

class FollowListContainer extends Component {
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
    onfollowData=()=>{
        let url='http://localhost:9001/follow/list?mnum='+this.props.mnum;
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
        this.onfollowData();
      }
    render() {
        const {selectData} = this.state
        console.log(selectData);
        return (
            <FollowListWrapper>
                {this.state.selectData.map(item =>
                <FollowList
                fmnum={item.fmnum}
                follower={item.follower}
                mnum={item.mnum}
                memailid={item.memailid}
                mnick={item.mnick}
                mpic={item.mpic}
                >
                </FollowList>)}
            </FollowListWrapper>
             
        )
    }
}
export default FollowListContainer;