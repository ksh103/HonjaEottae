import { NextPage } from 'next';
import { MypageWrapper, GraphWrapper } from './Mypage.style';

const MypageGraph: NextPage = () => {
  return (
    <>
      <MypageWrapper height="300px">
        <div className="subTitle">역동적이고 에너지 넘치는 손은성님</div>
        <GraphWrapper>
          <div className="LGraph"></div>
          <div className="RGraph"></div>
        </GraphWrapper>
      </MypageWrapper>
    </>
  );
};

export default MypageGraph;
