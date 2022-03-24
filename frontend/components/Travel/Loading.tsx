import React, { useEffect, useState } from 'react';

export default function Loading() {
  return (
    <div>
      <h1>산신령의 결과 분석 중...</h1>
      <img src="/images/혼구리.png" alt="loading" width="100%" />
      <h3>3초 후 분석이 완료됩니다.</h3>
    </div>
  );
}
