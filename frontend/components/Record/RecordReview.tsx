import TextArea from 'antd/lib/input/TextArea';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { endTour } from '../../store/record';
import {
  FileBox,
  ReviewBlock,
  ReviewButton,
  TagBlock,
  TagButton,
} from './Record.style';

const colors = ['lightgreen', 'lightpink', 'lightgoldenrodyellow', 'lightblue'];

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
  const onImageHandler = async (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const clickTagButton = (x: number, y: number) => {
    checkTag[x - 1][y - 1] = checkTag[x - 1][y - 1] === 1 ? 0 : 1;
    setCheckTag({ ...checkTag });
  };

  const clickResigerButton = () => {
    if (!image) alert('사진을 남겨주세요');
    else if (content === '') alert('후기를 남겨주세요');
    else {
      const result = confirm('여행을 종료하시겠습니까?');
      if (result) {
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
    }
  };

  return (
    <>
      <TagBlock>
        <div className="tag-title">✔ 여행 키워드 선택</div>
        {tag.map((a, i) => (
          <div key={i} className="tag-card">
            <div className="code-name">{a.codeName}</div>
            {a.tag.map((b, j) => (
              <TagButton
                key={j}
                onClick={() => clickTagButton(b.code, b.tagId)}
                state={checkTag[b.code - 1][b.tagId - 1]}
                color={colors[i]}
              >
                {b.tagName}
              </TagButton>
            ))}
          </div>
        ))}
      </TagBlock>
      <ReviewBlock>
        <div className="review-title">💌 여행 일기 작성</div>
        <FileBox>
          <input
            value={image?.name || ''}
            placeholder="첨부파일"
            className="upload-name"
            disabled
          />
          <label htmlFor="file">파일찾기</label>
          <input type="file" id="file" onChange={onImageHandler} />
        </FileBox>
        <TextArea
          showCount
          bordered={false}
          maxLength={100}
          style={{ height: 100, border: '1px solid lightgray' }}
          onChange={onContentHandler}
          value={content}
          placeholder="추억 남기기..."
        />
      </ReviewBlock>
      <ReviewButton onClick={clickResigerButton}>
        <div className="button">여행종료</div>
      </ReviewButton>
    </>
  );
}
