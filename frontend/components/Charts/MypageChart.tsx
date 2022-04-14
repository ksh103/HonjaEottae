import { ResponsiveBar } from '@nivo/bar';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MypageChart: NextPage = () => {
  const { monthCourses } = useSelector((state: RootState) => state.user);
  return (
    <>
      {monthCourses.length != 0 && (
        <ResponsiveBar
          data={monthCourses}
          keys={['count']}
          indexBy="date"
          margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
          padding={0.3}
          maxValue={4}
          colors={{ scheme: 'pastel1' }}
          enableLabel={false}
          enableGridY={false}
          colorBy="indexValue"
          axisBottom={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '월별',
            legendPosition: 'middle',
            legendOffset: 40,
          }}
          axisLeft={{
            tickValues: 5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '횟수',
            legendPosition: 'middle',
            legendOffset: -35,
          }}
        />
      )}
    </>
  );
};

export default MypageChart;
