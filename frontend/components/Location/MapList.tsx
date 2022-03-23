import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  ListBlock,
  ListWrapper,
  MapBlock,
  MapListWrapper,
} from './Location.styled';
import LocationMap from './LocationMap';

const MapList: NextPage = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log('위도 : ' + position.coords.latitude);
        console.log('경도 : ' + position.coords.longitude);
      });
    }
  }, []);
  const lists: string[] = [
    '광안대교',
    '부산항대교',
    '해운대',
    '광안리해수욕장',
    '우리집',
  ];

  const positions = [
    {
      title: '우리집',
      lat: latitude,
      lng: longitude,
    },
  ];

  return (
    <>
      <MapListWrapper>
        <MapBlock>
          <LocationMap positions={positions}></LocationMap>
        </MapBlock>
        <ListWrapper>
          {lists.map((list, idx) => {
            return <ListBlock key={idx}>{list}</ListBlock>;
          })}
        </ListWrapper>
      </MapListWrapper>
    </>
  );
};

export default MapList;
