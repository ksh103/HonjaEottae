import React from 'react';
import { TestLoading } from './Travel.style';
export default function Loading() {
  return (
    <TestLoading>
      <img src="/images/loading.gif" alt="loading" />
      <div className="loading-title">산신령의 결과 분석 중... 💨</div>
    </TestLoading>
  );
}
