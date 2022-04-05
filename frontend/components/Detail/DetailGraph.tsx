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
    <>
      {coursePercentage > 0 && (
        <GraphBlock>
          <GraphPercentage>
            😊새로운 인연을 만날 확률 <label>{coursePercentage}</label>% 😎
          </GraphPercentage>
          <GraphPie>
            <CourseTypeChart />
          </GraphPie>
        </GraphBlock>
      )}
    </>
  );
}
