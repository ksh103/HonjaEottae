import { NextPage } from 'next';
import Nav from '../Nav/Nav';
import Menu from '../Nav/Menu';
import { RegisterWrapper, RegisterFormWrapper } from './Register.style';
import { Button } from '../Course/Course.style';
import TourList from './TourList';
import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTourlist } from '../../store/register';
import { useRouter } from 'next/router';

const RegisterComp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [registerBtn, setRegisterBtn] = useState<boolean>(false);
  const onTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const onContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchTourlistData = useCallback(() => {
    dispatch(searchTourlist.request(keyword));
  }, [dispatch, keyword]);

  const searchTourlistButton = () => {
    searchTourlistData();
  };

  const courseRegisterButton = () => {
    setRegisterBtn(true);
    router.push('/course');
  };
  return (
    <>
      <Nav />
      <Menu currentName="코스 추가" />
      <Wrapper>
        <RegisterWrapper>
          <RegisterFormWrapper>
            <div className="titleDiv">
              <div className="subTitle">코스 이름</div>
              <input
                type="text"
                id="title"
                onChange={onTitleHandler}
                placeholder="코스 이름을 입력해주세요"
              />
            </div>
            <div className="titleDiv">
              <div className="subTitle">여행 기간</div>
              <input
                type="text"
                id="date"
                onChange={onDateHandler}
                placeholder="2박3일"
              />
            </div>
          </RegisterFormWrapper>
          <RegisterFormWrapper>
            <input
              type="text"
              id="name"
              onChange={onKeywordHandler}
              placeholder="찾을 관광지 이름을 입력해주세요"
            />
            <Button style={{ marginTop: 20 }} onClick={searchTourlistButton}>
              관광지 검색
            </Button>
          </RegisterFormWrapper>
          <div className="subTitle">관광지 목록</div>
          <TourList
            title={title}
            date={date}
            content={content}
            button={registerBtn}
          />
          <div className="subTitle">코스 개요</div>
          <textarea
            placeholder="코스 설명을 입력하세요"
            onChange={onContentHandler}
          />
          <div id="registerBtn">
            <Button onClick={courseRegisterButton}>코스 등록</Button>
          </div>
        </RegisterWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default RegisterComp;
