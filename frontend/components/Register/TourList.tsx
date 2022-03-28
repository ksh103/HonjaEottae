import { NextPage } from 'next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { courseRegitser } from '../../store/register';
import {
  ImageWrapper,
  SelectListWrapper,
  TourListWrapper,
  ListBlock,
} from './Register.style';

interface TourListProps {
  title: string;
  date: string;
  content: string;
  button: boolean;
}

const TourList = ({ title, date, content, button }: TourListProps) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { searchTourlists } = useSelector((state: RootState) => state.register);
  const [selectListTitle, setSelectListTitle] = useState<string[]>([]);
  const [selectListId, setSelectListId] = useState<number[]>([]);
  const addList = (data: { id: number; title: string }) => {
    if (!selectListTitle.includes(data.title)) {
      setSelectListTitle(selectList => [...selectList, data.title]);
      setSelectListId(selectList => [...selectList, data.id]);
    }
    // 리스트에 없다면 추가
    else {
      // 리스트에 있다면 제거
      setSelectListTitle(
        selectListTitle.filter(element => element !== data.title),
      );
      setSelectListId(selectListId.filter(element => element !== data.id));
    }
    console.log(selectListTitle);
    console.log(selectListId);
  };
  const removeList = (title: string) => {
    setSelectListTitle(selectListTitle.filter(element => element !== title));
  };

  if (button) {
    // 코스등록 버튼이 눌러졌다면
    dispatch(
      courseRegitser.request({
        courseContent: content,
        courseDays: date,
        courseDistance: '',
        courseName: title,
        touristId: selectListId,
        userId: userInfo.userId,
      }),
    );
  }
  return (
    <>
      <SelectListWrapper>
        {selectListTitle.map((list, idx) => (
          <>
            <ListBlock key={idx}>
              {list}
              <div id="removeBtn" onClick={() => removeList(list)}>
                X
              </div>
            </ListBlock>
            &nbsp;-{'>'}
          </>
        ))}
      </SelectListWrapper>
      <TourListWrapper>
        {searchTourlists.map((data, idx) => (
          <ImageWrapper key={idx}>
            <div id="image" onClick={() => addList(data)}>
              <img src="/images/1.png" />
            </div>
            <div id="title">{data.title}</div>
          </ImageWrapper>
        ))}
      </TourListWrapper>
    </>
  );
};

export default TourList;
