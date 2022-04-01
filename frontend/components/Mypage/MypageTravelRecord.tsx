import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MypageWrapper, MyTravleWrapper, DiaryWrapper } from './Mypage.style';
import MypageMap from './MypageMap';

const MypageTravelRecord: NextPage = () => {
  const { userVisitCourses, selectRecord } = useSelector(
    (state: RootState) => state.user,
  );
  const nowCourse = userVisitCourses.filter(
    data => data.courseId == selectRecord,
  );

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
              <div id="title">
                {nowCourse[0].recordRegDt}
                <br />
                {nowCourse[0].courseName}
              </div>
              <div id="image">
                <img src={nowCourse[0].image}></img>
                {/* <img src="/images/noimage.jpg"></img> */}
              </div>
              <div id="content">{nowCourse[0].recordContent}</div>
            </DiaryWrapper>
          </div>
        </MyTravleWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageTravelRecord;
