import React from 'react';
import { TestLoading } from './Travel.style';
export default function Loading() {
  return (
    <TestLoading>
      <div className="loading-title">산신령의 결과 분석 중... 💨</div>
      <img src="/images/loading.gif" alt="loading" />
    </TestLoading>
  );
}
