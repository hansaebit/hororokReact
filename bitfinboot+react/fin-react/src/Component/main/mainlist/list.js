import React,{Component} from 'react';
import "./mainlist.css";
import axios from 'axios';
import Postcard from './postcard';
import store from "../../../redux/store";

    
class list extends Component{

  constructor(props)
  {
      super(props);
      this.state={
          postData:[]
      }
  }

  //스프링에서 목록 가져오기
  mainlist=()=>{
      let url="http://localhost:9001/review/list";
      axios.get(url,{
          params:{
              mnum: store.getState().mnum
          }          
      }) 
      .then(res=>{       
        //console.log(res.data);     
          this.setState({
              postData:res.data
          })
      }).catch(err=>{
          console.log("포스팅목록 출력 에러"+err);
      });
      
  }

  componentDidMount() {
      this.mainlist();//처음시작시 백엔드로부터 데이터 가져오기
  }


render(){
  return (
      <div className="mainpage_container">
     <div className="mainpage_list_wrapper">      
        {
        this.state.postData.map((row,idx)=>(
        <Postcard row={row} key={idx} no={idx+1}
        history={this.props.history}/>
        ))
        }    
      </div>
      </div>
  )
}
}
export default list;

