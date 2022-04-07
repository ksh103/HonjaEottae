import type { NextPage } from 'next';
import LocationComp from '../components/Location/LocationComp';
import MainManual from '../components/Main/MainManual';

const Location: NextPage = () => {
  return (
    <>
      <LocationComp />
      <MainManual />
    </>
  );
};

export default Location;
