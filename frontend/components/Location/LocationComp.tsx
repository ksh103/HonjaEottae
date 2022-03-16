import { NextPage } from 'next';
import Menu from '../Nav/Menu';
import Nav from '../Nav/Nav';
import { LocationWrapper } from './Location.styled';
import Footer from '../Footer/Footer';
import MapList from './MapList';
import ImageList from './ImageList';
import TourDetail from './TourDetail';

const LocationComp: NextPage = () => {
  return (
    <>
      <Nav />
      <Menu currentName="내 위치 주변 관광지" />
      <LocationWrapper>
        <div>
          <div className="subTitle">관광지 목록</div>
          <MapList />
          <div className="subTitle">이미지</div>
          <ImageList />
          <div className="subTitle">광안대교(props)</div>
          <TourDetail />
        </div>
      </LocationWrapper>
      <Footer />
    </>
  );
};

export default LocationComp;
