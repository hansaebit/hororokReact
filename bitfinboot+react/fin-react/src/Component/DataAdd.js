import React,{Component}  from 'react';

class DataAdd extends Component
{
    //버튼 이벤트
    onBtnSave=()=>{
        //방법1
        //this.props.onSave({...this.refs});

        //방법2
        const {deptno,dname,loc}=this.refs;
        this.props.onSave(deptno.value,dname.value,loc.value);
    }

    render(){
        return (
            <div>
                <table className="table table-bordered" style={{width:'300px'}}>
                    <caption><b>데이타 추가폼</b></caption>
                    <tbody>
                        <tr>
                            <th style={{width:'100px'}}>부서번호</th>
                            <td>
                                <input type="text" className="form-control"
                                    ref="deptno"/>
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:'100px'}}>부서명</th>
                            <td>
                                <input type="text" className="form-control"
                                    ref="dname"/>
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:'100px'}}>부서위치</th>
                            <td>
                                <input type="text" className="form-control"
                                    ref="loc"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <button type="button" className="btn btn-info"
                                onClick={this.onBtnSave.bind(this)}>
                                    서버에 데이타 보내기
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataAdd;
