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
          keys={['dateCount']}
          indexBy="yearAndMonth"
          margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
          padding={0.3}
          colors={{ scheme: 'pastel1' }}
          enableLabel={false}
          colorBy="indexValue"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Count',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
        />
      )}
    </>
  );
};

export default MypageChart;
