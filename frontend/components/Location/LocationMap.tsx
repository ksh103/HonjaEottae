import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MapContainer } from '../../styles/variables';

interface MapProps {
  positions: { title: string; lat: number; lng: number }[];
}

const LocationMap = ({ positions }: MapProps) => {
  const { searchLoactions, selectLocation } = useSelector(
    (state: RootState) => state.location,
  );
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);
    let selectLat: number = 0;
    let selectLng: number = 0;
    let selectTitle: string = '';
    const selectedArray = searchLoactions.map(data => {
      if (selectLocation == data.touristName) {
        selectLat = data.touristLat;
        selectLng = data.touristLng;
        selectTitle = data.touristName;
      }
    });
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options =
          //관광지가 선택되지 않았을 때
          selectLat == 0
            ? {
                center: new window.kakao.maps.LatLng(
                  positions[0].lat,
                  positions[0].lng,
                ), // 중심 좌표
                level: 6, // map 크기
              }
            : //관광지가 선택되었을 때
              {
                center: new window.kakao.maps.LatLng(selectLat, selectLng), // 중심 좌표
                level: 6, // map 크기
              };

        const map = new window.kakao.maps.Map(container, options);
        var imageSrc = // 마커 이미지
          'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png';

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(40, 40);
          var overlayImageSize = new window.kakao.maps.Size(45, 45);
          var selectImageSize = new window.kakao.maps.Size(50, 50);

          // 마커 이미지를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );

          var overlayImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            overlayImageSize,
          );

          var selectImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            selectImageSize,
          );

          // 마커를 생성합니다
          let marker =
            selectTitle == positions[i].title
              ? new window.kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: new window.kakao.maps.LatLng(selectLat, selectLng), // 내가 방문한 코스 마커 // 마커를 표시할 위치
                  title: selectTitle, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: selectImage, // 마커 이미지
                })
              : new window.kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: new window.kakao.maps.LatLng( // 내가 방문한 코스 마커
                    positions[i].lat,
                    positions[i].lng,
                  ), // 마커를 표시할 위치
                  title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: markerImage, // 마커 이미지
                });

          // 마커에 표시할 인포윈도우를 생성합니다
          var overlay = new window.kakao.maps.CustomOverlay({
            content: `<div style="display:flex; justify-content:center;align-items:center">
            <div style='background-color:white;padding:5px'>${i + 1}. ${
              positions[i].title
            }</div>
            </div>`,
            position: marker.getPosition(),
            yAnchor: 2.5,
          });

          // 마우스 over 되었을 때 overlay 표시
          window.kakao.maps.event.addListener(
            marker,
            'mouseover',
            makeOverListener(map, overlay),
          );

          window.kakao.maps.event.addListener(marker, 'mouseover', function () {
            marker.setImage(overlayImage);
          });

          // 마우스 out 되었을 때 overlay 제거
          window.kakao.maps.event.addListener(
            marker,
            'mouseout',
            makeOutListener(overlay),
          );
          window.kakao.maps.event.addListener(marker, 'mouseout', function () {
            marker.setImage(markerImage);
          });
        }

        function makeOverListener(map: any, overlay: any) {
          return function () {
            overlay.setMap(map);
          };
        }

        function makeOutListener(overlay: any) {
          return function () {
            overlay.setMap(null);
          };
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  });
  return <MapContainer id="map"></MapContainer>;
};

export default LocationMap;
