import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button, SearchFormWrapper } from './Course.style';
const SearchForm: NextPage = () => {
  const router = useRouter();
  const Register = () => {
    router.push('/register');
  };
  return (
    <SearchFormWrapper>
      <input type="text" placeholder="검색어를 입력하세요" />
      <Button>검색</Button>
      <Button onClick={Register}>코스 추가하기</Button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
