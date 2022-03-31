import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { StampBlock, StampCard, StampCardContent } from './Record.style';

export default function RecordStamp() {
  const { courseTourist } = useSelector((state: RootState) => state.course2);

  const showStampCard = () => {
    return courseTourist.map(data => (
      <StampCard key={data.touristIndex}>
        <div className="stamp-card-line" />
        <div className="stamp-card-image">
          <img src={data.image} />
        </div>
        <div className="stamp-card-content">
          <StampCardContent hoverable={true}>
            <div className="stamp-card-title">
              <div className="stamp-card-index">{data.touristIndex}</div>
              {data.touristName}
            </div>
            <div className="stamp-card-address">{data.touristAddress}</div>
          </StampCardContent>
        </div>
      </StampCard>
    ));
  };

  return <StampBlock>{showStampCard()}</StampBlock>;
}
