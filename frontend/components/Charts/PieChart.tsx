import { NextPage } from 'next';
import { ResponsivePie } from '@nivo/pie';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const PieChart: NextPage = () => {
  const { areaCourses } = useSelector((state: RootState) => state.user);
  return (
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
  );
};

export default PieChart;
