import { ResponsiveTreeMap } from '@nivo/treemap';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import { Content } from './Datail.style';

const CourseTypeChart = dynamic(() => import('../../Charts/CourseTypeChart'), {
  ssr: false,
});
export default function DetailGraph() {
  const newPerson = 50;
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Content>
          <div className="new">새로운 인연을 만날 확률 {newPerson}%</div>
        </Content>
      </Col>
      <Col span={16}>
        <Content>
          <div className="graph">
            <CourseTypeChart />
          </div>
        </Content>
      </Col>
    </Row>
  );
}
