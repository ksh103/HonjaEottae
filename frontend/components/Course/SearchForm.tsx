import type { NextPage } from 'next';
import { Button, SearchFormWrapper } from './CourseComp.style';
const SearchForm: NextPage = () => {
  return (
    <SearchFormWrapper>
      <input type="text" placeholder="검색어를 입력하세요" />
      <Button>검색</Button>
      <Button>코스 추가하기</Button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
