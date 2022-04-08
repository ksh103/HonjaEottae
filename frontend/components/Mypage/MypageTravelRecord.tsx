import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  MyTravleWrapper,
  DiaryWrapper,
  MypageReview,
  DiaryBlock,
} from './Mypage.style';
import MypageMap from './MypageMap';

const MypageTravelRecord: NextPage = () => {
  const { userVisitCourses, selectRecord } = useSelector(
    (state: RootState) => state.user,
  );
  const nowCourse = userVisitCourses.filter(
    data => data.courseId == selectRecord,
  );
  const changeDate = (word: string) => {
    const date = word.split('-');
    const year = date[0];
    const month = date[1][0] === '0' ? date[1][1] : date[1];
    const day = date[2][0] === '0' ? date[2][1] : date[2];

    return `${year}년 ${month}월 ${day}일`;
  };
  return (
    <MypageReview>
      <div className="subTitle">📍 여행 기록</div>
      <MyTravleWrapper>
        <div className="map">
          <MypageMap />
        </div>
        <div className="diary">
          {nowCourse.length != 0 ? (
            <DiaryBlock>
              <div className="diary-card">
                <div className="review-image">
                  <img src={nowCourse[0].image} />
                </div>
                <div className="review-date">
                  {changeDate(nowCourse[0].recordRegDt)}
                </div>
                <div className="review-name">{nowCourse[0].courseName}</div>
                <div className="review-content">
                  {nowCourse[0].recordContent}
                </div>
              </div>
            </DiaryBlock>
          ) : (
            <DiaryWrapper>
              <div id="noRecord">
                방문한 지역이 없습니다.😥 <br />
                여행을 시작해보세요!
              </div>
            </DiaryWrapper>
          )}
        </div>
      </MyTravleWrapper>
    </MypageReview>
  );
};

export default MypageTravelRecord;
