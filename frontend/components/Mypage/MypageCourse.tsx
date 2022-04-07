import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CourseSlider from '../Course/CourseSlider';
import { CourseWrapper } from './Mypage.style';

const MypageCourse: NextPage = () => {
  const { userCourses, userLikes } = useSelector(
    (state: RootState) => state.user,
  );
  return (
    <>
      {userCourses.length > 0 && (
        <CourseWrapper>
          <div className="subTitle">🛠 내가 만든 여행 코스</div>
          <CourseSlider data={userCourses} />
        </CourseWrapper>
      )}
      {userLikes.length > 0 && (
        <CourseWrapper>
          <div className="subTitle">❤ 좋아요 한 코스</div>
          <div className="list-block">
            <CourseSlider data={userLikes} />
          </div>
        </CourseWrapper>
      )}
    </>
  );
};

export default MypageCourse;
