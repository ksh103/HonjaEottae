import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CourseList from '../Course/CourseList';
import { CourseWrapper } from './Mypage.style';

const MypageCourse: NextPage = () => {
  const { userCourses, userLikes } = useSelector(
    (state: RootState) => state.user,
  );
  return (
    <>
      {userCourses.length > 0 && (
        <CourseWrapper>
          <div className="subTitle">내가 만든 여행 코스</div>
          <CourseList data={userCourses} />
        </CourseWrapper>
      )}
      {userLikes.length > 0 && (
        <CourseWrapper>
          <div className="subTitle">좋아요 한 코스</div>
          <CourseList data={userLikes} />
        </CourseWrapper>
      )}
    </>
  );
};

export default MypageCourse;
