import { NextPage } from 'next';
import { useState } from 'react';
import {
  ImageWrapper,
  SelectListWrapper,
  TourListWrapper,
  ListBlock,
} from './Register.style';
const datas = [
  { id: 1, image: '이미지1', title: '광안대교1' },
  { id: 2, image: '이미지2', title: '광안대교2' },
  { id: 3, image: '이미지3', title: '광안대교3' },
  { id: 4, image: '이미지4', title: '광안대교4' },
  { id: 5, image: '이미지5', title: '광안대교5' },
  { id: 5, image: '이미지5', title: '광안대교7' },
  { id: 5, image: '이미지5', title: '광안대교6' },
  { id: 5, image: '이미지5', title: '광안대교8' },
  // { id: 5, image: '이미지5', title: '광안대교9' },
  // { id: 5, image: '이미지5', title: '광안대교9' },
  // { id: 5, image: '이미지5', title: '광안대교9' },
  // { id: 5, image: '이미지5', title: '광안대교9' },
];

const TourList: NextPage = () => {
  const [selectList, setSelectList] = useState<string[]>([]);
  const addList = (title: string) => {
    if (!selectList.includes(title))
      setSelectList(selectList => [...selectList, title]);
    // 리스트에 없다면 추가
    else {
      // 리스트에 있다면 제거
      setSelectList(selectList.filter(element => element !== title));
    }
    console.log(selectList);
  };
  const removeList = (title: string) => {
    setSelectList(selectList.filter(element => element !== title));
  };
  return (
    <>
      <SelectListWrapper>
        {selectList.map((list, idx) => (
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
        {datas.map((data, idx) => (
          <ImageWrapper key={idx}>
            <div id="image" onClick={() => addList(data.title)}>
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
