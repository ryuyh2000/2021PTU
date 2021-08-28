var mapContainer = document.querySelector('#map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption)


function listenerLocation(position){

    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon)
        
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition
        }); 
        map.setCenter(locPosition); 
    });
}

function buskersLocation(){
        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {
            content: '<div class="buskers-location">'+
            '<img src="https://i1.sndcdn.com/artworks-000324021660-jgzmbq-t500x500.jpg"'+
            '</div>', 
            latlng: new kakao.maps.LatLng(35.798838, 128.583052)//==> 버스킹 시작 버튼을 누르면 그 위치를 저장
                                                                    //==>예시를 넣은것이고 할 때는 geo를 써야함 사실 아직 geo 쓰는 이해 잘 안됐음
        }
        
    ];
    //==> 버스커들의 프로필 사진 데이터 필요

        // 버스킹 시작 버튼누름 ==> api에서 프로필 사진 가지고 오면 content에 넣음 ==> 버튼 누름과 함께 위치정보를 가지고옴 
            //==> latlng: new kakao.maps.LatLng(latitude, longitude) 에 넣음

    for (var i = 0; i < positions.length; i ++) {

        var customOverlay = new kakao.maps.CustomOverlay({
            position: positions[i].latlng,
            content: positions[i].content   
        });
        customOverlay.setMap(map);
}
}


// 커스텀 오버레이를 지도에 표시합니다

// 마커가 지도 위에 표시되도록 설정합니다
listenerLocation();
buskersLocation();



