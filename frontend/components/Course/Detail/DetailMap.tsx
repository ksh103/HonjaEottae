import React, { useEffect } from 'react';
import { CourseTourist } from '../../../store/course2';
import { CourseMap } from './Datail.style';
interface MapProps {
  tourist: CourseTourist[];
}
export default function DetailMap({ tourist }: MapProps) {
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
            tourist[0].touristLat,
            tourist[0].touristLng,
          ),
          level: 7,
        };
        const map = new window.kakao.maps.Map(container, options);
        const imageSrc =
          'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png';

        for (let i = 0; i < tourist.length; i++) {
          const imageSize = new window.kakao.maps.Size(50, 50);
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );
          const position = new window.kakao.maps.LatLng(
            tourist[i].touristLat,
            tourist[i].touristLng,
          );
          // 마커 표시하기
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: position,
            title: tourist[i].touristName,
            image: markerImage,
          });
          let linePath, distance;
          let lineLine = new window.kakao.maps.Polyline();
          // 마커 선 연결
          if (i != 0) {
            linePath = [
              new window.kakao.maps.LatLng(
                tourist[i - 1].touristLat,
                tourist[i - 1].touristLng,
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
            content: `<div>${i + 1}. ${tourist[i].touristName}</div>`,
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
          // 오버레이 생성하기
          // const content = `
          //   <div class="customoverlay">
          //     <span class="title">${i + 1}. ${tourist[i].touristName}</span>
          //   </div>`;
          // const customOverlay = new window.kakao.maps.CustomOverlay({
          //   map: map,
          //   position: position,
          //   content: content,
          //   yAnchor: 1,
          // });
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
    return () => {
      return mapScript.removeEventListener('load', onLoadKakaoMap);
    };
  }, [tourist]);
  return <CourseMap id="course-map" />;
}
