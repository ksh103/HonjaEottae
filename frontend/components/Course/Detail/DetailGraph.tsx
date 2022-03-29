import { ResponsiveTreeMap } from '@nivo/treemap';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Content, GraphBlock, GraphPercentage, GraphPie } from './Datail.style';

const CourseTypeChart = dynamic(() => import('../../Charts/CourseTypeChart'), {
  ssr: false,
});
export default function DetailGraph() {
  const { coursePercentage } = useSelector((state: RootState) => state.course2);
  return (
    // <Row gutter={20}>
    //   <Col span={8}>
    //     <Content>
    //       <div className="new">새로운 인연을 만날 확률 {coursePercentage}%</div>
    //     </Content>
    //   </Col>
    //   <Col span={16}>
    //     <Content>
    //       <div className="graph">
    //         <CourseTypeChart />
    //       </div>
    //     </Content>
    //   </Col>
    // </Row>
    <GraphBlock>
      <GraphPercentage>
        <div>새로운 인연을 만날 확률 {50}%</div>
      </GraphPercentage>
      <GraphPie>
        <CourseTypeChart />
      </GraphPie>
    </GraphBlock>
  );
}
