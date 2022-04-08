import React, { useEffect } from 'react';
import { Stamp } from '../../store/record';
import { TourMap } from './Record.style';

interface MapProps {
  stamps: Stamp[];
}

export default function RecordMap({ stamps }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('course-map');
        const options = {
          center: new window.kakao.maps.LatLng(
            stamps[0].touristLat,
            stamps[0].touristLng,
          ),
          level: 6,
        };
        const map = new window.kakao.maps.Map(container, options);
        const imageSrc =
          'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png';

        for (let i = 0; i < stamps.length; i++) {
          const imageSize = new window.kakao.maps.Size(50, 50);
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );
          const position = new window.kakao.maps.LatLng(
            stamps[i].touristLat,
            stamps[i].touristLng,
          );
          // 마커 표시하기
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: position,
            title: stamps[i].touristName,
            image: markerImage,
          });
          let linePath, distance;
          let lineLine = new window.kakao.maps.Polyline();
          // 마커 선 연결
          if (i != 0) {
            linePath = [
              new window.kakao.maps.LatLng(
                stamps[i - 1].touristLat,
                stamps[i - 1].touristLng,
              ),
              position,
            ];
          }
          const drawLine = new window.kakao.maps.Polyline({
            map: map,
            path: linePath,
            strokeWeight: 3, //선 두께
            strokeColor: '#db4040', // 선 색
            strokeOpacity: 1, // 선 불투명도
            strokeStyle: 'dash', // 선 스타일
          });

          // 인포윈도우 생성하기
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div>${i + 1}. ${stamps[i].touristName}</div>`,
          });
          (function (marker, infowindow) {
            // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
            window.kakao.maps.event.addListener(
              marker,
              'mouseover',
              function () {
                infowindow.open(map, marker);
              },
            );

            // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
            window.kakao.maps.event.addListener(
              marker,
              'mouseout',
              function () {
                infowindow.close();
              },
            );
          })(marker, infowindow);
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => {
      return mapScript.removeEventListener('load', onLoadKakaoMap);
    };
  }, [stamps]);
  return <TourMap id="course-map" />;
}
