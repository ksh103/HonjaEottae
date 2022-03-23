import { NextPage } from 'next';
import Nav from '../Nav/Nav';
import Menu from '../Nav/Menu';
import { RegisterWrapper, InputBlock } from './Register.style';
import { Button, SearchFormWrapper } from '../Course/Course.style';
import TourList from './TourList';
import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';

const RegisterComp: NextPage = () => {
  return (
    <>
      <Nav />
      <Menu currentName="코스 추가" />
      <Wrapper>
        <RegisterWrapper>
          <form>
            <div className="subTitle">코스 이름</div>
            <SearchFormWrapper>
              <input
                type="text"
                id="title"
                placeholder="코스 이름을 입력해주세요"
              />
            </SearchFormWrapper>
            <SearchFormWrapper>
              <input
                type="text"
                id="name"
                placeholder="검색어를 입력해주세요"
              />
              <Button style={{ marginTop: 20 }}>검색</Button>
            </SearchFormWrapper>
            <div className="subTitle">관광지 목록</div>
            <TourList />
            <div className="subTitle">코스개요</div>
            <textarea placeholder="코스 설명을 입력하세요" />
            <div id="registerBtn">
              <Button onClick={() => {}}>코스 등록</Button>
            </div>
          </form>
        </RegisterWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default RegisterComp;
