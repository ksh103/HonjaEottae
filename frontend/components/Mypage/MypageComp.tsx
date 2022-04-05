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
import { SubTitle, Title } from './Mypage.style';
import { TEST } from '../../assets/test';

const MypageComp: NextPage = () => {
  const MypageGraph = dynamic(() => import('./MypageGraph'), { ssr: false });
  const { tourId } = useSelector((state: RootState) => state.record);
  const { userInfo, userVisitCourses } = useSelector(
    (state: RootState) => state.user,
  );
  return (
    <>
      <Nav />
      <Menu currentName="마이페이지" />
      {userInfo.userId > 0 ? (
        <Wrapper>
          {userInfo.tourTestId == 7 ? (
            <Title>반갑습니다 {userInfo.userName}님.</Title>
          ) : (
            <>
              <SubTitle
                style={{ color: TEST.results[userInfo.tourTestId - 1].color }}
              >
                {TEST.results[userInfo.tourTestId - 1].title}
              </SubTitle>
              <Title>반갑습니다 {userInfo.userName}님.</Title>
            </>
          )}

          {tourId > 0 && <MainStamp />}
          {userVisitCourses.length > 0 && <MypageGraph />}
          <MypageTravelRecord />
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
