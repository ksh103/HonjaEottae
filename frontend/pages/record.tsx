import type { NextPage } from 'next';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Nav/Menu';
import Nav from '../components/Nav/Nav';
import { RecordMap, RecordReview, RecordStamp } from '../components/Record';
import { Wrapper } from '../styles/variables';

const Record: NextPage = () => {
  return (
    <>
      <Nav />
      <Menu currentName="나의 여행 레코드" />
      <Wrapper>
        <h1>제주 사계해안도로, 바다와 산의 하모니에 홀릭하다!</h1>
        <RecordMap />
        <RecordStamp />
        <RecordReview />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Record;
