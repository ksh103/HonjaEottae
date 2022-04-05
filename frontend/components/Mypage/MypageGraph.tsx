import { NextPage } from 'next';
import {
  MypageWrapper,
  GraphBlock,
  Title,
  SubTitle,
  GraphWrapper,
} from './Mypage.style';
import MypageChart from '../Charts/MypageChart';
import PieChart from '../Charts/PieChart';

const MypageGraph: NextPage = () => {
  return (
    <>
      <GraphWrapper>
        <div className="subTitle">📊 개인 여행 분석</div>
        <GraphBlock>
          <div className="LGraph">
            <div>월별 여행 분석</div>
            <MypageChart />
          </div>
          <div className="RGraph">
            <div>지역 여행 분석</div>
            <PieChart />
          </div>
        </GraphBlock>
      </GraphWrapper>
    </>
  );
};

export default MypageGraph;
