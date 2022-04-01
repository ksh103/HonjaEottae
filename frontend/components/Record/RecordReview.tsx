import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ReviewBlock, TagBlock, TagButton } from './Record.style';

export default function RecordReview() {
  const dispatch = useDispatch();
  const { tag } = useSelector((state: RootState) => state.record);
  const [checkTag, setCheckTag] = useState(
    Array.from(Array(4), () => Array(6).fill(0)),
  );

  const clickTagButton = (x: number, y: number) => {
    checkTag[x - 1][y - 1] = checkTag[x - 1][y - 1] === 1 ? 0 : 1;
    setCheckTag({ ...checkTag });
  };

  const registerReview = () => {
    // dispatch();
  };
  return (
    <>
      <TagBlock>
        {tag.map((a, i) => (
          <div key={i} className="tag-card">
            <div className="code-name">{a.codeName}</div>
            {a.tag.map((b, j) => (
              <TagButton
                key={j}
                onClick={() => clickTagButton(b.code, b.tagId)}
                state={checkTag[b.code - 1][b.tagId - 1]}
              >
                {b.tagName}
              </TagButton>
            ))}
          </div>
        ))}
      </TagBlock>
      <ReviewBlock>
        <h1>글쓰기</h1>
        <div>
          <input type="file" />
        </div>
        <div>
          <textarea />
        </div>
      </ReviewBlock>
      <div>
        <button onClick={registerReview}>기록남기기</button>
      </div>
    </>
  );
}
