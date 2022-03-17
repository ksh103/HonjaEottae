import { NextPage } from 'next';
import { Wrapper } from '../../styles/variables';
import Footer from '../Footer/Footer';
import Menu from '../Nav/Menu';
import Nav from '../Nav/Nav';
import MypageGraph from './MypageGraph';
import MypageTravelRecord from './MypageTravelRecord';
import MypageCourse from './MypageCourse';

const MypageComp: NextPage = () => {
  return (
    <>
      <Nav />
      <Menu currentName="마이페이지" />
      <Wrapper>
        <MypageGraph />
        <MypageTravelRecord />
        <MypageCourse />
      </Wrapper>
      <Footer />
    </>
  );
};

export default MypageComp;
