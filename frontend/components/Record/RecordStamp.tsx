import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { markStamp } from '../../store/record';
import { StampBlock, StampCard, StampCardContent } from './Record.style';

export default function RecordStamp() {
  const dispatch = useDispatch();
  const { courseTourist } = useSelector((state: RootState) => state.course2);
  const { stamps, tourId } = useSelector((state: RootState) => state.record);
  const { userInfo } = useSelector((state: RootState) => state.user);
  // const rad = (x: number) => (x * Math.PI) / 180;
  const getDistance = (lat1: number, lng1: number) => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position: any) => {
    //     const lat2 = +position.coords.latitude;
    //     const lng2 = +position.coords.longitude;
    //     const R = 6378137;
    //     const dLat = rad(lat2 - lat1);
    //     const dLng = rad(lng2 - lng1);
    //     const a =
    //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //       Math.cos(rad(lat1)) *
    //         Math.cos(rad(lat2)) *
    //         Math.sin(dLng / 2) *
    //         Math.sin(dLng / 2);
    //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     const d = R * c;
    //     console.log(d);
    //     return d;
    //   });
    // }
  };

  const clickTourist = (index: number) => {
    // const { touristLat, touristLng } = stamps[index - 1];
    // const distance = getDistance(touristLat, touristLng);
    // console.log(distance);
    // 여기서 현재 위치랑 비교해서 맞으면 디스패치하고 아니면 알림창 보여주기
    dispatch(
      markStamp.request({
        touristIndex: index,
        courseId: tourId,
        userId: userInfo.userId,
      }),
    );
  };

  const showStampCard = () => {
    return stamps.map(data => {
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
    });
  };

  return <StampBlock>{showStampCard()}</StampBlock>;
}
