import { NextPage } from 'next';
import { MypageWrapper, MyTravleWrapper, DiaryWrapper } from './Mypage.style';
import MypageMap from './MypageMap';

const MypageTravelRecord: NextPage = () => {
  return (
    <>
      <MypageWrapper height="500px">
        <div className="subTitle">여행 기록</div>
        <MyTravleWrapper>
          <div className="map">
            <MypageMap />
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
