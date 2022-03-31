import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailMap from '../components/Course/Detail/DetailMap';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Nav/Menu';
import Nav from '../components/Nav/Nav';
import { RecordReview, RecordStamp } from '../components/Record';
import { RootState } from '../store';
import { getCourseDetail } from '../store/course2';
import { Wrapper } from '../styles/variables';

const Record: NextPage = () => {
  const dispatch = useDispatch();
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );
  const { tourId } = useSelector((state: RootState) => state.record);
  useEffect(() => {
    if (courseId === 0 && tourId !== 0) {
      dispatch(getCourseDetail.request(tourId));
    }
  }, [tourId]);
  return (
    <>
      <Nav />
      <Menu currentName="나의 여행 레코드" />
      <Wrapper>
        <h1>{courseInfo.courseName}</h1>
        {courseId != 0 && <DetailMap tourist={courseTourist} />}
        <RecordStamp />
        <RecordReview />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Record;
