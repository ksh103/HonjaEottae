import { ResponsiveTreeMap } from '@nivo/treemap';
import { Col, Row } from 'antd';
import React from 'react';
import CourseTypeChart from '../../Charts/CourseTypeChart';
import { Content } from './Datail.style';

const data = [
  {
    id: 'A타입',
    label: '역동적이고 에너지가 넘치는 청춘 여행 스타일',
    value: 3,
    // color: 'hsl(257, 70%, 50%)',
  },
  {
    id: 'B타입',
    label: '유명한 관광지만 골라가는 알짜배기 여행 스타일',
    value: 1,
    // color: 'hsl(257, 70%, 50%)',
  },
];

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
          <div className="graph">{/* <CourseTypeChart /> */}</div>
        </Content>
      </Col>
    </Row>
  );
}
