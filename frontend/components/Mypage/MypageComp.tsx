import { NextPage } from 'next';
import { Wrapper } from '../../styles/variables';
import Footer from '../Footer/Footer';
import Menu from '../Nav/Menu';
import Nav from '../Nav/Nav';
import MypageTravelRecord from './MypageTravelRecord';
import MypageCourse from './MypageCourse';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Loading from '../Loading/Loading';
import { MainStamp } from '../Main';
const MypageComp: NextPage = () => {
  const MypageGraph = dynamic(() => import('./MypageGraph'), { ssr: false });
  const { userInfo, userVisitCourses } = useSelector(
    (state: RootState) => state.user,
  );
  const { tourId } = useSelector((state: RootState) => state.record);
  return (
    <>
      <Nav />
      <Menu currentName="마이페이지" />
      {userInfo.userId > 0 ? (
        <Wrapper>
          {userVisitCourses.length > 0 && <MypageGraph />}
          <MypageTravelRecord />
          {tourId > 0 && <MainStamp />}
          <MypageCourse />
        </Wrapper>
      ) : (
        <Wrapper>
          <Loading />
        </Wrapper>
      )}
      <Footer />
    </>
  );
};

export default MypageComp;
