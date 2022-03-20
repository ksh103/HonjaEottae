import { Col, Row } from 'antd';
import React from 'react';
import MypageChart from '../../Charts/MypageChart';
import { Content } from './Datail.style';

export default function DetailGraph() {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Content>
          <div className="graph">새로운 인연을 만날 확률 50%</div>
        </Content>
      </Col>
      <Col span={12}>
        <Content>
          <div className="graph">
            <h1 className="title">🧠성향 분석</h1>
          </div>
        </Content>
      </Col>
    </Row>
  );
}
