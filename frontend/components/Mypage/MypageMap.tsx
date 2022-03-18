import { useEffect } from 'react';
import { MapContainer } from '../../styles/variables';

interface MapProps {
  positions: { title: string; lat: number; lng: number }[];
}

const MypageMap = ({ positions }: MapProps) => {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(36.527327, 127.651767), // 중심 좌표
          level: 14, // map 크기
        };
        const map = new window.kakao.maps.Map(container, options);
        var imageSrc = // 마커 이미지
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );

          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new window.kakao.maps.LatLng( // 내가 방문한 코스 마커
              positions[i].lat,
              positions[i].lng,
            ), // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  });
  return <MapContainer id="map"></MapContainer>;
};

export default MypageMap;
