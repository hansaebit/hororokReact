import React, { Component } from 'react';
import './DetailComment.css'
import AddComment from './AddComment'
import { Input, Button } from '@material-ui/core';
import axios from 'axios';
import store from "../../../../../../redux/store";

class DetailComment extends Component {
    constructor(props,{match}) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
        modalOpen: false,
        arnum: this.props.rnum,
        acontent: "",
        amnick: store.getState().mnick,
        acontentList: [],
    };
}
    answerInsert=()=>{
        this.setState({
            acontentList: [...this.state.acontentList, {amnick: store.getState().mnick, acontent: this.state.acontent}],
            acontent: "",
        })
        let data=this.state;
        let url='http://localhost:9001/answer/insert';
        axios.post(url,data)
            .then(res=>{
            //성공시
            //alert(res.data.mes);
            //입력값 지우기
            window.location.replace("/main/detail/"+this.state.arnum)
        }).catch(err=>{
            console.log("추가시 오류남:"+err);
            
        })
    }

    list=()=>{
        let url="http://localhost:9001/answer/answerlist?arnum="+this.state.arnum;
        axios.get(url)
        .then(res=>{
            this.setState({
                acontentList: res.data
            })
            
        }).catch(err=>{
            console.log("목록 오류:"+err)
        })
    }

    handleChange = (e) => {
        this.setState({
            acontent: e.target.value
        });
    }

    handleKeyEvent = (e) => {
        if(e.key === "Enter") {
            this.answerInsert();
        }
    }

    // Modal open,close
    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    componentDidMount() {
        this.list(); //처음 시작시 백엔트로부터 데이터 가져오기
    }

    // Modal open,close
    render() {
        return (
            <div className="DetailComment">
               <div className="DetailComment-bar">
                    <div className="comment">
                        <div className="new_comment">
                            <Input className="write_newComment" onChange={this.handleChange} onKeyUp={this.handleKeyEvent}
                            type="text"
                            placeholder="댓글달기..."
                            value={this.state.acontent}
                            size="50"
                            />
                            <Button className="upload_button" onClick={this.answerInsert}>
                                <b>게시</b>
                            </Button>
                        </div>
                    </div>
                    <div className="comment_wrapper">
                    {this.state.acontentList.map(item =>
                        <AddComment
                        arnum={this.props.rnum}
                        mpic={this.props.mpic}
                        anum={item.anum}
                        amnick={item.amnick}
                        acontent={item.acontent}
                        awriteday={item.awriteday}
                        handleRemove={this.handleRemove}
                        key={item.awriteday}>
                        history={this.props.history}
                        </AddComment>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailComment;