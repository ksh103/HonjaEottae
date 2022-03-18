import { NextPage } from 'next';
import { MypageWrapper, MyTravleWrapper, DiaryWrapper } from './Mypage.style';
import MypageMap from './MypageMap';

const positions = [
  {
    title: '경기도 용인시',
    lat: 37.319771,
    lng: 127.177559,
  },
  {
    title: '부산광역시 사상구',
    lat: 35.15574,
    lng: 128.995425,
  },
  {
    title: '대구광역시 달서구',
    lat: 35.791963,
    lng: 128.556111,
  },
  {
    title: '근린공원',
    lat: 33.451393,
    lng: 126.570738,
  },
];

const MypageTravelRecord: NextPage = () => {
  return (
    <>
      <MypageWrapper height="500px">
        <div className="subTitle">여행 기록</div>
        <MyTravleWrapper>
          <div className="map">
            <MypageMap positions={positions}></MypageMap>
          </div>
          <div className="diary">
            <DiaryWrapper>
              <div id="title">일기 제목 들어갈 예정</div>
              <div id="image">이미지 들어갈 예정</div>
              <div id="content">일기 내용 들어갈 예정</div>
            </DiaryWrapper>
          </div>
        </MyTravleWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageTravelRecord;
