import React from 'react';
import { TEST } from '../../assets/test';
import { PopularTypeBlock } from './Travel.style';

interface PopularTypeType {
  type: number;
  rank: number;
}

export default function PopularType({ type, rank }: PopularTypeType) {
  return (
    <PopularTypeBlock>
      <div>{rank}위</div>
      <div className="popular-title">{TEST.results[type].title}</div>
      <img src="/images/3.png" />
    </PopularTypeBlock>
  );
}
