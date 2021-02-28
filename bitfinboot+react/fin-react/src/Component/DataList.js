import axios from 'axios';
import React,{Component}  from 'react';
import DataAdd from "./DataAdd";
class DataList extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            deptData:[]
        }

        //함수 선언
        this.onAppSave=this.onAppSave.bind(this);
    }

    //추가메서드
    //방법1
    // onAppSave=(x)=>{
    //     console.log(x.deptno.value+","+x.dname.value+","+x.loc.value);
    // }

    //방법2
    onAppSave=(deptno,dname,loc)=>{
        console.log(deptno+","+dname+","+loc);
        //스프링으로 데이타 보내기
        var url="http://localhost:9001/react/add";

        axios.post(url,
            //{deptno:deptno,dname:dname,loc:loc}
            {deptno,dname,loc}//키와값이 같을경우 한번만 써도 된다 아아아아아아아아

        ).then((responseData)=>{
            console.log("추가 성공");
        }).catch((error)=>{
            console.log("데이타추가시 오류발생:"+error);
        });
    }
    render(){
        return (
            <div>
                <h3>DataList</h3>
                <DataAdd onSave={this.onAppSave}/>
            </div>
        )
    }
}

export default DataList;
