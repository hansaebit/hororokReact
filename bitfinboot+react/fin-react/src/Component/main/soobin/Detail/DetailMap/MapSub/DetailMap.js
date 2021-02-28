import React, { useEffect } from 'react';
import './DetailMap.css';

const { kakao } = window;

const DetailMap = (props) => {
    //console.log(props.resaddr);
    //console.log(props.resname);
    useEffect(() => {
        let addr=props.resaddr;
        let storename=props.resname;
        //console.log(addr);
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(addr, function(result, status) {

                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    let infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;">'+storename+'</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
            });
    });
    return (
        <div className='DetailMap'>
            <div className='DetailMap-bar'>
                <div className='DetailMap-map' id='myMap'></div>
            </div>
        </div>
    );
}

export default DetailMap; 