import { Col, Row } from 'antd';
import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TEST } from '../../assets/test';
import Loading from '../../components/Travel/Loading';
import PopularType from '../../components/Travel/PopularType';
import {
  Header,
  Wrapper,
  TestResultCard,
  Button,
  ButtonWrapper,
  TestTitle,
  ResultFooter,
} from '../../components/Travel/Travel.style';
import TypeCourse from '../../components/Travel/TypeCourse';
import { RootState } from '../../store';
import { getTestResult } from '../../store/travel';

const TravelResult: NextPage = () => {
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { typeRank } = useSelector((state: RootState) => state.travel);
  
  const data = useCallback(() => {
    dispatch(getTestResult.request('1'));
  }, [dispatch]);
  
  useEffect(() => {
    setNum(Number(localStorage.getItem('type')));
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const { Kakao } = window;
    if (!Kakao.isInitialized())
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPTKEY);

    if (typeRank.length === 0) {
      console.log('?');

      data();
    }
  }, []);

  const shareToKakao = () => {
    const { Kakao } = window;
    Kakao.Link.sendCustom({
      templateId: 73466,
    });
  };

  const popularType = () => {
    const popular = [0, 1];
    return (
      <Row>
        {popular.map((pop, i) => (
          <Col span={12} key={i}>
            <PopularType type={pop} rank={i + 1} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <>
      <Header>
        <Link href="/">
          <label>혼자어때</label>
        </Link>
      </Header>
      {loading ? (
        <Wrapper>
          <Loading />
        </Wrapper>
      ) : (
        <Wrapper>
          <h1 className="title">여행 성향 테스트</h1>
          <TestTitle color={TEST.results[num].color}>
            <div
              dangerouslySetInnerHTML={{ __html: TEST.results[num].desc }}
            ></div>
            <h2>
              전체 테스트 참여자 중 <label>15%</label>가 같은 유형입니다.
            </h2>
          </TestTitle>
          <div>
            <img src="/images/3.png" width="100%" />
          </div>
          <TestResultCard>
            <h1 className="title">🚩 유형별 코스 추천</h1>
            {TEST.results[num].courses.map((course, i) => {
              return (
                <TypeCourse
                  key={i}
                  no={course.no}
                  title={course.title}
                  image={course.image}
                />
              );
            })}
          </TestResultCard>
          <TestResultCard>
            <h1 className="title">✨가장 많은 유형</h1>
            {popularType()}
          </TestResultCard>
          <ButtonWrapper>
            <Button color="yellow" onClick={() => shareToKakao()}>
              테스트 공유하기
            </Button>
            <Link href="/travel/test">
              <Button>테스트 다시하기</Button>
            </Link>
          </ButtonWrapper>
          <ResultFooter>
            더 많은 여행정보가 궁금하다면?
            <Link href="/">
              <label>혼자어때</label>
            </Link>
          </ResultFooter>
        </Wrapper>
      )}
    </>
  );
};

export default TravelResult;
