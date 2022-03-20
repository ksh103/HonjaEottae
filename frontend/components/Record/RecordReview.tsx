import React from 'react';
import { ReviewBlock } from './Record.style';

export default function RecordReview() {
  return (
    <>
      <ReviewBlock>
        <h1>키워드 선택</h1>
        <div>
          <h2>테마</h2>
          {/* 버튼으로 만들기 선택되면 추가하기useState에 ㅇㅋ */}
          자연 바다 산 역사 힐링
        </div>
        <div>
          <h2>일행</h2>
          {/* 버튼으로 만들기 선택되면 추가하기useState에 ㅇㅋ */}
          커플 가족 혼자 부부 동료 친구
        </div>
        <div>
          <h2>분위기</h2>
          {/* 버튼으로 만들기 선택되면 추가하기useState에 ㅇㅋ */}
          힐링 조용한 신나는 즐거운
        </div>
        <div>
          <h2>목적</h2>
          {/* 버튼으로 만들기 선택되면 추가하기useState에 ㅇㅋ */}
          휴식 관광 쇼핑 음식 축제 만남
        </div>
      </ReviewBlock>
      <ReviewBlock>
        <h1>글쓰기</h1>
        <textarea rows={5}>
          즉흥으로 떠난 혼행 .... 나는 너무 힐링했다.
        </textarea>
      </ReviewBlock>
      <div>
        <button>기록남기기</button>
      </div>
    </>
  );
}
