import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCourse } from '../../store/course';
import { Button, SearchFormWrapper } from './Course.style';

const SearchForm: NextPage = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>('');
  const onKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchCourseData = useCallback(() => {
    dispatch(searchCourse.request(keyword));
  }, [dispatch, keyword]);

  const router = useRouter();
  const searchCourseButton = () => {
    searchCourseData();
  };
  const Register = () => {
    router.push('/register');
  };
  return (
    <SearchFormWrapper>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onKeywordHandler}
      />
      <Button onClick={searchCourseButton}>검색</Button>
      <Button onClick={Register}>코스 추가하기</Button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
