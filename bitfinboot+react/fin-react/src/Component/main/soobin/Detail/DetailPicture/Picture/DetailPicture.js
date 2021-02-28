import React, { Component } from "react";
import Slider from "react-slick";
import './DetailPicture.css';
import axios from 'axios';

class DetailPicture extends Component {
    constructor(props){
      super(props);
      //console.log(this.props.rnum);

    this.state = {
      picData:'',
      imgurl:'http://localhost:9001/reviewsave/'
    }
  } 
//백엔드로부터 num 에 해당하는 데이터 가져오기
onPicData=()=>{
let url='http://localhost:9001/review/pic?rnum='+this.props.rnum;
console.log(this.rnum);
axios.get(url)
.then(res=>{
    //성공시 dto 리턴값을 받아 데이터에 넣어준다
    this.setState({
      picData:res.data
    })
    console.log(res.data);
})
}

componentWillMount() {
this.onPicData();
}
    render() {
      const {picData}=this.state;
        //settings 부분, 슬라이더의 기능을 조정할 수 있다.
       const settings = {
         dots: true,  // 점은 안 보이게
         infinite: false, // 무한으로 즐기게
         speed: 500,
         slidesToShow: 1, //4장씩 보이게 해주세요
         slidesToScroll: 1, //1장씩 넘어가세요
         arrows: true,
         responsive: [ // 반응형 웹 구현 옵션
           {
               breakpoint: 1200, // 화면 사이즈 1200px
               settings: {
                 slidesToShow: 1,
               }
           },
           {
             breakpoint: 1023,
             settings: {
               slidesToShow: 1
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1
             }
           }
         ]
       };
        return (
    <div className="DetailPicture">
        <div className="slide-list-bar">
          <div className="slide-list-box">
            <Slider {...settings}>
              <div className="slide-list-item">
                <img src={'http://localhost:9001/reviewsave/'+picData.picname}/>
              </div>
            </Slider>
          </div>
        </div>
    </div>
        )
    }
}
export default DetailPicture;