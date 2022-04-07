import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { GraphBlock, GraphPercentage, GraphPie } from './Datail.style';

const CourseTypeChart = dynamic(() => import('../Charts/CourseTypeChart'), {
  ssr: false,
});
export default function DetailGraph() {
  const { coursePercentage } = useSelector((state: RootState) => state.detail);
  return (
    <GraphBlock>
      <GraphPercentage>
        <div>
          😊 새로운 인연을 만날 확률 <label>{coursePercentage}</label>%
        </div>
        <div className="percentage">
          여행 중(60%) + 관광지 방문(35%) + 북마크(15%)
        </div>
      </GraphPercentage>
      <GraphPie>
        <div className="pie-title">여행 성향 테스트 유형별 여행 비율</div>
        <CourseTypeChart />
      </GraphPie>
    </GraphBlock>
  );
}
