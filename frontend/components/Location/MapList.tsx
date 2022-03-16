import { NextPage } from 'next';
import {
  ListBlock,
  ListWrapper,
  MapBlock,
  MapListWrapper,
} from './Location.styled';

const MapList: NextPage = () => {
  const lists: string[] = [
    '광안대교',
    '부산항대교',
    '해운대',
    '광안리해수욕장',
    '우리집',
  ];
  return (
    <>
      <MapListWrapper>
        <MapBlock></MapBlock>
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
