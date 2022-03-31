import { NextPage } from 'next';
import { MypageWrapper, GraphWrapper } from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieChart from '../Charts/PieChart';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { TEST } from '../../assets/test';

const MypageGraph: NextPage = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  return (
    <>
      {userInfo.tourTestId == 7 ? (
        <div
          style={{
            fontSize: '30px',
            fontFamily: 'Jalnan',
          }}
        >
          반갑습니다 {userInfo.userName}님.
        </div>
      ) : (
        <>
          <div
            style={{
              fontSize: '20px',
              fontFamily: 'Jalnan',
              color: TEST.results[userInfo.tourTestId - 1].color,
            }}
          >
            {TEST.results[userInfo.tourTestId - 1].title}
          </div>
          <div
            style={{
              fontSize: '30px',
              fontFamily: 'Jalnan',
            }}
          >
            반갑습니다 {userInfo.userName}님.
          </div>
        </>
      )}

      <MypageWrapper height="300px">
        <GraphWrapper>
          <div className="LGraph">
            <div>월별 여행 분석</div>
            <MypageChart />
          </div>
          <div className="RGraph">
            <div>지역 여행 분석</div>
            <PieChart />
          </div>
        </GraphWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageGraph;
