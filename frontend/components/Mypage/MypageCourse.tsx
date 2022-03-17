import { NextPage } from 'next';
import CourseList from '../Course/CourseList';
import { MypageWrapper } from './Mypage.style';

const MypageCourse: NextPage = () => {
  return (
    <>
      <MypageWrapper height="280px">
        <div className="subTitle">내가 만든 여행 코스</div>
        <CourseList />
      </MypageWrapper>
      <MypageWrapper height="280px">
        <div className="subTitle">좋아요 한 코스</div>
        <CourseList />
      </MypageWrapper>
    </>
  );
};

export default MypageCourse;
