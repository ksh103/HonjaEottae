import type { NextPage } from 'next';
import SearchForm from './SearchForm';
import Nav from '../Nav/Nav';
import { CourseWrapper, CourseBlock } from './Course.style';
import CourseList from './CourseList';
import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';
import Menu from '../Nav/Menu';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CourseComp: NextPage = () => {
  const dummy = [
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
    { courseId: 1, courseName: '임시 데이터' },
  ];
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { searchCourses, searchKeyword } = useSelector(
    (state: RootState) => state.course,
  );
  return (
    <>
      <Nav />
      <Menu currentName="코스추천" />
      <Wrapper>
        <CourseWrapper>
          <SearchForm />
          <CourseBlock>
            {searchCourses.length == 0 ? (
              <></>
            ) : (
              <div id="search">
                <div className="title"> {searchKeyword} 관련 코스 추천</div>
                <CourseList data={searchCourses} />
              </div>
            )}
            <div className="title">{userInfo.userName}님 맞춤 추천 코스</div>
            <CourseList data={dummy} />
            <div className="title">푸른 자연을 느낄 수 있는 코스</div>
            <CourseList data={dummy} />
            <div className="title">역사가 담긴 코스</div>
            <CourseList data={dummy} />
            <div className="title">시원한 바다의 향기가 느껴지는 코스</div>
            <CourseList data={dummy} />
          </CourseBlock>
        </CourseWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default CourseComp;
