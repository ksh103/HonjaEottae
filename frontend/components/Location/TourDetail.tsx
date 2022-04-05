import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ImageListWrapper } from './Location.styled';

const TourDetail: NextPage = () => {
  const { searchLoactions, selectLocation } = useSelector(
    (state: RootState) => state.location,
  );
  let selectContent = '';
  searchLoactions.map(data => {
    if (selectLocation == data.touristName) {
      selectContent = data.touristSummary;
    }
  });
  return (
    <ImageListWrapper>
      <div>{selectContent}</div>
    </ImageListWrapper>
  );
};

export default TourDetail;
