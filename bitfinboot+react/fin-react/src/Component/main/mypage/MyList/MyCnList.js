import React,{Component} from 'react';
import ListPrepare from './ListPrepare';
import axios from 'axios';

class MyKorList extends Component{
    constructor(props){
        super(props); 
        console.log("마이코리아리스트");
        console.log(this.props.match.params.mnick);
    }
    state = {
        mypageListInfo:[]
    }

    // 리스트 불러오기
    getMypageListInfo = () => {
        let url = "http://localhost:9001/mypage/list/cn";
        axios.get(url,{
            params:{
                mnick:this.props.match.params.mnick
            }
        })
        .then(respones => {
            console.log(respones.data);
            this.setState({
                mypageListInfo:respones.data
            })
        }).catch(error => {
            console.log("마이페이지 리스트 오류 : " + error);
        })
    }

    componentDidMount(){
        this.getMypageListInfo();
    }

    render(){
        return(
        <div className="mypage_list_wrapper">
            {/* 리스트 내용 시작 */}
            {this.state.mypageListInfo ? this.state.mypageListInfo.map(r => {
                return <ListPrepare rnum={r.rnum}  mnum={r.rmnum} />
                }) : '리스트가 엄서용..'}
        </div>
        )
    }
}
 
export default MyKorList;