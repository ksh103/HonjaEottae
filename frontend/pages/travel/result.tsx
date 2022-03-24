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
  const [loading, setLoading] = useState(true);
  const [rank, setRank] = useState<number[]>([]);
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();
  const { typeResult, myType } = useSelector(
    (state: RootState) => state.travel,
  );

  const getTypeRank = useCallback(() => {
    dispatch(getTestResult.request(''));
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const { Kakao } = window;
    if (!Kakao.isInitialized())
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPTKEY);

    if (typeResult.length === 0) {
      getTypeRank();
    }
  }, []);

  useEffect(() => {
    if (typeResult.length > 0) {
      const datas = typeResult
        .map((data, idx) => [idx, data])
        .sort((a, b) => b[1] - a[1]);
      console.log(datas);
      setRank([datas[0][0], datas[1][0]]);
    }
  }, [typeResult]);

  const shareToKakao = () => {
    const { Kakao } = window;
    Kakao.Link.sendCustom({
      templateId: 73466,
    });
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
          <TestTitle color={TEST.results[myType].color}>
            <div
              dangerouslySetInnerHTML={{ __html: TEST.results[myType].desc }}
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
            {TEST.results[myType].courses.map((course, i) => {
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
          {rank.length > 0 && (
            <TestResultCard>
              <h1 className="title">✨가장 많은 유형</h1>
              <Row>
                {rank.map((type, i) => (
                  <Col span={12} key={type}>
                    <PopularType type={type} rank={i + 1} />
                  </Col>
                ))}
              </Row>
            </TestResultCard>
          )}
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
