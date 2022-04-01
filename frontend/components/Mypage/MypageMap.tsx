import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MapContainer } from '../../styles/variables';
import { selectRecords } from '../../store/user';

const MypageMap = () => {
  const dispatch = useDispatch();
  const { userVisitCourses, selectRecord } = useSelector(
    (state: RootState) => state.user,
  );
  const ClickList = (courseId: number) => {
    dispatch(selectRecords(courseId));
  };

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);

    let selectLat: number = 0;
    let selectLng: number = 0;
    let selectTitle: string = '';
    let selectedMarker: any = null;
    userVisitCourses.map(data => {
      if (selectRecord == data.courseId) {
        selectLat = data.touristLat;
        selectLng = data.touristLng;
        selectTitle = data.courseName;
      }
    });

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');

        const options = {
          center: new window.kakao.maps.LatLng(36.527327, 127.651767), // 중심 좌표
          level: 14, // map 크기
        };

        const map = new window.kakao.maps.Map(container, options);
        var imageSrc = // 마커 이미지
          'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png';

        for (var i = 0; i < userVisitCourses.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(30, 30);
          var selectImageSize = new window.kakao.maps.Size(35, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
          );

          var selectImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            selectImageSize,
          );

          // 마커를 생성합니다
          let marker =
            selectTitle == userVisitCourses[i].courseName
              ? new window.kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: new window.kakao.maps.LatLng(selectLat, selectLng), // 내가 방문한 코스 마커 // 마커를 표시할 위치
                  title: userVisitCourses[i].courseId, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: selectImage, // 마커 이미지
                })
              : new window.kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: new window.kakao.maps.LatLng( // 내가 방문한 코스 마커
                    userVisitCourses[i].touristLat,
                    userVisitCourses[i].touristLng,
                  ), // 마커를 표시할 위치
                  title: userVisitCourses[i].courseId, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  image: markerImage, // 마커 이미지
                });
          // 마커에 표시할 인포윈도우를 생성합니다
          var overlay = new window.kakao.maps.CustomOverlay({
            content: `<div style="display:flex; justify-content:center;align-items:center">
            <div style='background-color:white;padding:5px'>${i + 1}. ${
              userVisitCourses[i].courseName
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

          // 마우스 out 되었을 때 overlay 제거
          window.kakao.maps.event.addListener(
            marker,
            'mouseout',
            makeOutListener(overlay),
          );

          window.kakao.maps.event.addListener(marker, 'click', function () {
            if (!selectedMarker || selectedMarker !== marker) {
              // 클릭된 마커 객체가 null이 아니면
              // 클릭된 마커의 이미지를 기본 이미지로 변경하고
              !!selectedMarker && selectedMarker.setImage(markerImage);

              // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
              marker.setImage(selectImage);
            }

            // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
            selectedMarker = marker;

            ClickList(Number(marker.Gb));
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

export default MypageMap;
