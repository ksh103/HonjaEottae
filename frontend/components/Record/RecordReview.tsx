import Router from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { endTour } from '../../store/record';
import { ReviewBlock, TagBlock, TagButton } from './Record.style';

export default function RecordReview() {
  const dispatch = useDispatch();
  const { tag, tourId } = useSelector((state: RootState) => state.record);
  const { userInfo } = useSelector((state: RootState) => state.user);
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File>();
  const [checkTag, setCheckTag] = useState(
    Array.from(Array(4), () => Array(6).fill(0)),
  );
  useEffect(() => {
    if (tourId === 0) Router.push('/');
  }, [tourId]);

  const onContentHandler = (e: any) => {
    setContent(e.target.value);
  };
  const onImageHandler = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const clickTagButton = (x: number, y: number) => {
    checkTag[x - 1][y - 1] = checkTag[x - 1][y - 1] === 1 ? 0 : 1;
    setCheckTag({ ...checkTag });
  };

  const clickResigerButton = () => {
    if (content === '') alert('후기를 남겨주세요');
    else if (!image) alert('사진을 남겨주세요');
    else {
      dispatch(
        endTour.request({
          tag: checkTag,
          tourId: tourId,
          recordContent: content,
          userId: userInfo.userId,
          image: image,
        }),
      );
    }
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
          <input type="file" onChange={onImageHandler} />
        </div>
        <div>
          <textarea
            value={content}
            placeholder="후기 작성해주세요"
            onChange={onContentHandler}
          />
        </div>
      </ReviewBlock>
      <div>
        <button onClick={clickResigerButton}>기록남기기</button>
      </div>
    </>
  );
}
