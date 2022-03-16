import { NextPage } from 'next';
import Nav from '../Nav/Nav';
import Menu from '../Nav/Menu';
import { RegisterWrapper, InputBlock } from './Register.style';
import { Button } from '../Course/Course.style';
import TourList from './TourList';
import Footer from '../Footer/Footer';

const RegisterComp: NextPage = () => {
  return (
    <>
      <Nav />
      <Menu currentName="코스 추가" />
      <RegisterWrapper>
        <InputBlock>
          <input
            type="text"
            id="title"
            placeholder="코스 이름을 입력해주세요"
          />
        </InputBlock>
        <InputBlock>
          <div>
            <input type="text" id="name" placeholder="검색어를 입력해주세요" />
            <Button>검색</Button>
          </div>
          <div className="subTitle">관광지 목록</div>
          <TourList />
          <div className="subTitle">코스개요</div>
          <textarea placeholder="코스 설명을 입력하세요" />
          <div className="subTitle">해시태그</div>
          <input type="text" id="hashTag" placeholder="#해시태그 #입력" />
        </InputBlock>
        <Button>코스 등록</Button>
      </RegisterWrapper>
      <Footer />
    </>
  );
};

export default RegisterComp;
