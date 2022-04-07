import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { markStamp } from '../../store/record';
import { StampBlock, StampCard, StampCardContent } from './Record.style';

export default function RecordStamp() {
  const dispatch = useDispatch();
  const { stamps, tourId } = useSelector((state: RootState) => state.record);
  const { userInfo } = useSelector((state: RootState) => state.user);

  const getDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number,
  ) => {
    const deg2rad = (deg: number) => {
      return deg * (Math.PI / 180);
    };
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  };

  const clickTourist = (index: number) => {
    const result = confirm('스탬프를 찍으시겠습니까?');
    if (result) {
      const { touristLat, touristLng, state } = stamps[index - 1];
      if (state) return;
      window.navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const dist = getDistance(touristLat, touristLng, lat, lng);
        if (dist < 2) {
          dispatch(
            markStamp.request({
              touristIndex: index,
              courseId: tourId,
              userId: userInfo.userId,
            }),
          );
        } else {
          alert('관광지에서 멀리 있습니다.  이동 후 다시 시도해주세요!');
        }
      });
    }
  };

  return (
    <StampBlock>
      <div className="stamp-notice">
        💡 각 관광지 500m 이내 있을 경우 해당 관광지 버튼을 클릭하여 스탬프 가능
      </div>
      {stamps.map(data => {
        return (
          <StampCard key={data.touristIndex} $state={data.state}>
            <div className="stamp-card-line" />
            <div className="stamp-card-image">
              <img src={data.image} />
              <img src="/images/clear.png" className="stamp" />
            </div>
            <div className="stamp-card-content">
              <StampCardContent
                hoverable={!data.state}
                $state={data.state}
                onClick={() => clickTourist(data.touristIndex)}
              >
                <div className="stamp-card-title">
                  <div className="stamp-card-index">{data.touristIndex}</div>
                  {data.touristName}
                </div>
                <div className="stamp-card-address">{data.touristAddress}</div>
              </StampCardContent>
            </div>
          </StampCard>
        );
      })}
    </StampBlock>
  );
}
