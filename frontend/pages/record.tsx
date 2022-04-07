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
    const result = confirm('여행을 종료하시겠습니까?');
    if (result) {
      dispatch(cancelTour.request({ userId: userInfo.userId, tourId: tourId }));
      Router.push('/');
    }
  };

  return (
    <>
      <Nav />
      <Menu currentName="나의 여행 레코드" />
      <Wrapper>
        <RecordHeader>
          {courseName}
          <div
            className="course-detail"
            onClick={() => Router.push(`/course/${tourId}`)}
          >
            상세보기
          </div>
        </RecordHeader>
        {stamps.length > 0 && <RecordMap stamps={stamps} />}
        <RecordStamp />
        {stamps.some(data => data.state) ? (
          <RecordReview />
        ) : (
          <ReviewButton onClick={CancelTour}>
            <div className="button">여행취소</div>
          </ReviewButton>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Record;
