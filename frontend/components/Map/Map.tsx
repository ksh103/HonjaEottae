// import { useEffect } from 'react';
// import { MapContainer } from './Map.styled';

// interface MapProps {
//   latitude: number;
//   logitude: number;
// }

// const Map = ({ latitude, logitude }: MapProps) => {
//   useEffect(() => {
//     const mapScript = document.createElement('script');

//     mapScript.async = true;
//     mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
//     document.head.appendChild(mapScript);

//     const onLoadKakaoMap = () => {
//       window.kakao.maps.load(() => {
//         const container = document.getElementById('map');
//         const options = {
//           center: new window.kakao.maps.LatLng(latitude, logitude),
//           level: 14,
//         };
//         const map = new window.kakao.maps.Map(container, options);
//         const markerPosition = new window.kakao.maps.LatLng(latitude, logitude);
//         const marker = new window.kakao.maps.Marker({
//           position: markerPosition,
//         });
//         marker.setMap(map);
//         // 라이브러리 TEST
//         // window.kakao.maps.event.addListener(
//         //   map,
//         //   'click',
//         //   function (mouseEvent: any) {
//         //     var latlng = mouseEvent.latLng;
//         //     marker.setPosition(latlng);

//         //     var message = '클릭한 위치의 위도는' + latlng.getLat() + ' 이고,';
//         //     message += '경도는' + latlng.getLng() + ' 입니다.';
//         //     console.log(message);
//         //   },
//         // );
//       });
//     };

//     mapScript.addEventListener('load', onLoadKakaoMap);
//     return () => mapScript.removeEventListener('load', onLoadKakaoMap);
//   }, [latitude, logitude]);
//   return <MapContainer id="map"></MapContainer>;
// };
export default Map;