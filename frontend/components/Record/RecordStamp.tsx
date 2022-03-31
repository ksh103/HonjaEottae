import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { StampBlock, StampCard, StampCardContent } from './Record.style';

export default function RecordStamp() {
  const dispatch = useDispatch();
  const { courseTourist } = useSelector((state: RootState) => state.course2);
  const { stamp } = useSelector((state: RootState) => state.record);

  const markStamp = (index: number) => {
    console.log(index);
    // dispatch();
  };

  const showStampCard = () => {
    return courseTourist.map(data => {
      let state = false;
      if (stamp.length > 0) {
        state = stamp.some(s => s.touristIndex === data.touristIndex);
      }
      return (
        <StampCard key={data.touristIndex}>
          <div className="stamp-card-line" />
          <div className="stamp-card-image">
            <img src={data.image} />
          </div>
          <div className="stamp-card-content">
            <StampCardContent
              hoverable={!state}
              $state={state}
              onClick={() => markStamp(data.touristIndex)}
            >
              <div className="stamp-card-title">
                <div className="stamp-card-index">{data.touristIndex}</div>
                {data.touristName}
              </div>
              <div className="stamp-card-address">{data.touristAddress}</div>
            </StampCardContent>
          </div>
        </StampCard>
      );
    });
  };

  return <StampBlock>{showStampCard()}</StampBlock>;
}
