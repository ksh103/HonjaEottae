import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailMap from '../components/Course/Detail/DetailMap';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Nav/Menu';
import Nav from '../components/Nav/Nav';
import { RecordReview, RecordStamp } from '../components/Record';
import { RootState } from '../store';
import { cancelTour, getTag } from '../store/record';
import { Wrapper } from '../styles/variables';

const Record: NextPage = () => {
  const dispatch = useDispatch();
  const { courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { tourId, tag, stamps, courseName } = useSelector(
    (state: RootState) => state.record,
  );

  useEffect(() => {}, []);

  const CancelTour = () => {
    console.log('그만할래~~~~');
    dispatch(cancelTour.request({ userId: userInfo.userId, tourId: tourId }));
    Router.push('/');
  };

  return (
    <>
      <Nav />
      <Menu currentName="나의 여행 레코드" />
      <Wrapper>
        <h1>{courseName}</h1>
        {/* {tourId > 0 && <DetailMap tourist={courseTourist} />} */}
        <RecordStamp />
        {stamps.some(data => data.state) ? (
          <RecordReview />
        ) : (
          <div onClick={CancelTour}>
            <button>여행 종료</button>
          </div>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Record;
