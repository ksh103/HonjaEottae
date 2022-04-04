import type { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Nav/Menu';
import Nav from '../components/Nav/Nav';
import { RecordMap, RecordReview, RecordStamp } from '../components/Record';
import { RecordHeader, ReviewButton } from '../components/Record/Record.style';
import { RootState } from '../store';
import { cancelTour } from '../store/record';
import { Wrapper } from '../styles/variables';

const Record: NextPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { tourId, stamps, courseName } = useSelector(
    (state: RootState) => state.record,
  );

  const CancelTour = () => {
    dispatch(cancelTour.request({ userId: userInfo.userId, tourId: tourId }));
    Router.push('/');
  };

  return (
    <>
      <Nav />
      <Menu currentName="나의 여행 레코드" />
      <Wrapper>
        <RecordHeader>{courseName}</RecordHeader>
        {stamps.length > 0 && <RecordMap stamps={stamps} />}
        <RecordStamp />
        {stamps.some(data => data.state) ? (
          <RecordReview />
        ) : (
          <ReviewButton onClick={CancelTour}>
            <div className="button">여행종료</div>
          </ReviewButton>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Record;
