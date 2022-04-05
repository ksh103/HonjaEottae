import { NextPage } from 'next';
import Menu from '../Nav/Menu';
import Nav from '../Nav/Nav';
import { LocationWrapper } from './Location.styled';
import Footer from '../Footer/Footer';
import MapList from './MapList';
import ImageList from './ImageList';
import TourDetail from './TourDetail';
import { Wrapper } from '../../styles/variables';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchLocation } from '../../store/location';
import { RootState } from '../../store';

const LocationComp: NextPage = () => {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const { searchLoactions, selectLocation } = useSelector(
    (state: RootState) => state.location,
  );
  const lists: string[] = [];
  let images: string[] = [];
  const positions = searchLoactions.map((searchLocation, idx) => {
    // 관광지 지도를 위한 lat,lng,title 뽑아낸 data
    lists.push(searchLocation.touristName);
    if (selectLocation == searchLocation.touristName) {
      images = searchLocation.image;
    }
    return {
      title: searchLocation.touristName,
      lat: searchLocation.touristLat,
      lng: searchLocation.touristLng,
    };
  });
  useEffect(() => {
    // 위도 경도 파악
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  const searchLocationData = useCallback(() => {
    dispatch(searchLocation.request({ lat: latitude, lng: longitude }));
  }, [dispatch, latitude, longitude]);

  useEffect(() => {
    // 위도 경도 파악
    if (latitude != 0 && longitude != 0) {
      // 위 경도가 파악 되었을 때
      searchLocationData();
    }
  }, [latitude, longitude]);
  return (
    <>
      <Nav />
      <Menu currentName="내 위치 주변 관광지" />
      <Wrapper>
        <LocationWrapper>
          <div>
            <div className="subTitle">관광지 목록</div>
            <MapList positions={positions} lists={lists} />
            <div className="subTitle">{selectLocation}</div>
            {images.length > 0 && <ImageList images={images} />}
            <TourDetail />
          </div>
        </LocationWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default LocationComp;
