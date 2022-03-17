import { NextPage } from 'next';
import Map from '../Map/Map';
import { MypageWrapper, MyTravleWrapper, DiaryWrapper } from './Mypage.style';

const MypageTravelRecord: NextPage = () => {
  return (
    <>
      <MypageWrapper height="500px">
        <div className="subTitle">여행 기록</div>
        <MyTravleWrapper>
          <div className="map">
            <Map
              latitude={36.383646484753115}
              logitude={127.56438873000504}
            ></Map>
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
