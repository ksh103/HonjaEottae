import { NextPage } from 'next';
import { ResponsivePie } from '@nivo/pie';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DefaultImage } from '../Mypage/Mypage.style';

const PieChart: NextPage = () => {
  const { areaCourses } = useSelector((state: RootState) => state.user);
  return (
    <>
      {areaCourses.length == 0 ? (
        <DefaultImage>
          <img src="images/방문지역분석.png"></img>
        </DefaultImage>
      ) : (
        <ResponsivePie
          data={areaCourses}
          margin={{ top: 20, right: 80, bottom: 30, left: 80 }}
          innerRadius={0.4}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'nivo' }}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
        />
      )}
    </>
  );
};

export default PieChart;
