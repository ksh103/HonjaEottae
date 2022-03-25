import { NextPage } from 'next';
import { MypageWrapper, GraphWrapper } from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieChart from '../Charts/PieChart';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const MypageGraph: NextPage = () => {
  const { userInfo } = useSelector((state: RootState) => state.user);
  return (
    <>
      <MypageWrapper height="300px">
        <div className="subTitle">
          tourId : {userInfo.tourTestId} {userInfo.userName}님 반갑습니다.
        </div>
        <GraphWrapper>
          <div className="LGraph">
            <MypageChart />
          </div>
          <div className="RGraph">
            <PieChart />
          </div>
        </GraphWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageGraph;
