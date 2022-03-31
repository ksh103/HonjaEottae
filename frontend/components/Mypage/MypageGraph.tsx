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
      {userInfo.userId > 0 ? (
        <MypageWrapper height="300px">
          {userInfo.tourTestId != 7 ? (
            <div className="subTitle">
              {TEST.results[userInfo.tourTestId - 1].title}
              {userInfo.userName}님 반갑습니다.
            </div>
          ) : (
            <div className="subTitle">{userInfo.userName}님 반갑습니다.</div>
          )}
          <GraphWrapper>
            <div className="LGraph">
              <MypageChart />
            </div>
            <div className="RGraph">
              <PieChart />
            </div>
          </GraphWrapper>
        </MypageWrapper>
      ) : (
        '로딩중'
      )}
    </>
  );
};

export default MypageGraph;
