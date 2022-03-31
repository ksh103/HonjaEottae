import { ResponsiveBar } from '@nivo/bar';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DefaultImage } from '../Mypage/Mypage.style';
const MypageChart: NextPage = () => {
  const data = [
    {
      yearAndMonth: '202201',
      dateCount: 1,
    },
    {
      yearAndMonth: '202202',
      dateCount: 2,
    },
    {
      yearAndMonth: '202203',
      dateCount: 3,
    },
    {
      yearAndMonth: '202204',
      dateCount: 1,
    },
    {
      yearAndMonth: '202205',
      dateCount: 1,
    },
    {
      yearAndMonth: '202206',
      dateCount: 0,
    },
  ];
  const { monthCourses } = useSelector((state: RootState) => state.user);
  console.log(monthCourses);
  return (
    <>
      {monthCourses.length == 0 ? (
        // <DefaultImage>
        //   <img src="/images/월별방문분석.png" />
        // </DefaultImage>
        <ResponsiveBar
          data={data}
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
      ) : (
        <ResponsiveBar
          data={data}
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
