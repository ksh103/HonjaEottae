import { useDispatch } from 'react-redux';
import { selectLocation } from '../../store/location';
import {
  ListBlock,
  ListWrapper,
  MapBlock,
  MapListWrapper,
} from './Location.styled';
import LocationMap from './LocationMap';

interface MapListProps {
  positions: { title: string; lat: number; lng: number }[];
  lists: string[];
}

interface ClickListProps {
  list: string;
}

const MapList = ({ positions, lists }: MapListProps) => {
  const dispatch = useDispatch();

  const ClickList = ({ list }: ClickListProps) => {
    dispatch(selectLocation(list));
  };

  return (
    <>
      <MapListWrapper>
        <MapBlock>
          {/* 만약 positions 이 안들어온 상태에서 map을 호출하면 error가 남.
              positions의 길이가 0 이상일 때 map 호출 */}
          {positions.length > 0 ? (
            <LocationMap positions={positions}></LocationMap>
          ) : (
            <></>
          )}
        </MapBlock>
        <ListWrapper>
          {lists.map((list, idx) => {
            return (
              <ListBlock
                key={idx}
                onClick={() => {
                  ClickList({ list });
                }}
              >
                {list}
              </ListBlock>
            );
          })}
        </ListWrapper>
      </MapListWrapper>
    </>
  );
};

export default MapList;
