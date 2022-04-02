import type { NextPage } from 'next';
import SearchForm from './SearchForm';
import Nav from '../Nav/Nav';
import { CourseWrapper, CourseBlock } from './Course.style';
import CourseList from './CourseList';
import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';
import Menu from '../Nav/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { recommendCourse, resetSearchCourses } from '../../store/course';
import Loading from '../Loading/Loading';
import { KEYWORD } from '../../assets/keyword';

const CourseComp: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 첫 실행 시 검색결과가 있으면 지우기
    dispatch(resetSearchCourses());
    dispatch(recommendCourse.request(userInfo.userId));
  }, []);
  const { userInfo } = useSelector((state: RootState) => state.user);

  const { searchCourses, searchKeyword, keywordCourses, userCourses } =
    useSelector((state: RootState) => state.course);
  return (
    <>
      <Nav />
      <Menu currentName="코스추천" />

      {keywordCourses.length > 0 ? (
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
              {userInfo.userName.length > 0 ? (
                <div className="title">
                  {userInfo.userName}님 맞춤 추천 코스
                </div>
              ) : (
                <div className="title">혼자어때가 추천하는 여행 코스</div>
              )}
              {userCourses.length != 0 && <CourseList data={userCourses} />}
              {keywordCourses.map((keywordCourse: any, idx) => (
                <div>
                  <div className="title">
                    {
                      KEYWORD.titles[
                        KEYWORD.keywords.indexOf(keywordCourse.title)
                      ]
                    }
                  </div>
                  <CourseList data={keywordCourse.contents} />
                </div>
              ))}
            </CourseBlock>
          </CourseWrapper>
        </Wrapper>
      ) : (
        <Loading />
      )}

      <Footer />
    </>
  );
};

export default CourseComp;
