import { FiArrowRight, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { courseRegitser, resetSearchTourlist } from '../../store/register';
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
  };
  const removeList = (title: string) => {
    setSelectListTitle(selectListTitle.filter(element => element !== title));
  };
  useEffect(() => {
    // 첫 실행 시 검색결과가 있으면 지우기
    dispatch(resetSearchTourlist());
    // 등록 버튼 클릭 시
    if (button) {
      // 코스등록 api 중복호출 방지
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
  }, [button]);

  return (
    <>
      {selectListTitle.length > 0 && (
        <SelectListWrapper>
          {selectListTitle.map((list, idx) => (
            <div key={idx} style={{ display: 'flex' }}>
              <ListBlock>
                {list}
                <div id="removeBtn" onClick={() => removeList(list)}>
                  <FiX style={{ marginTop: '5.5px', fontSize: '17px' }} />
                </div>
              </ListBlock>
              <FiArrowRight style={{ marginTop: '18px', marginLeft: '10px' }} />
            </div>
          ))}
        </SelectListWrapper>
      )}

      <TourListWrapper>
        {searchTourlists.map((data, idx) => (
          <ImageWrapper key={idx}>
            <div id="image" onClick={() => addList(data)}>
              <img src={data.image} />
            </div>
            <div id="title">{data.title}</div>
          </ImageWrapper>
        ))}
      </TourListWrapper>
    </>
  );
};

export default TourList;
