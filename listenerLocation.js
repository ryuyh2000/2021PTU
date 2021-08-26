var mapContainer = document.querySelector('#map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption)

function markers(position){

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    

    var content = '<div class ="label">'+
    '<span class="left"></span>'+
    '<img src="https://newsimg.hankookilbo.com/cms/articlerelease/2021/05/20/a94ebb0f-ac3e-4f01-a0ec-893a585a2e39.jpg"'+
    '<span class="right"></span>'+
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(latitude, longitude); 
    
    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content   
    });
    
    // 커스텀 오버레이를 지도에 표시합니다
    map.setCenter(position)
    customOverlay.setMap(map);
}



// 커스텀 오버레이를 지도에 표시합니다

// 마커가 지도 위에 표시되도록 설정합니다

navigator.geolocation.getCurrentPosition(markers);
