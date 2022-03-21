import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TEST } from '../../assets/test';
import Loading from '../../components/Travel/Loading';
import {
  Header,
  Wrapper,
  TestResultCard,
  Button,
  ButtonWrapper,
  TestTitle,
} from '../../components/Travel/Travel.style';

const TravelResult: NextPage = () => {
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const { Kakao } = window;
  useEffect(() => {
    setNum(Number(localStorage.getItem('type')));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    Kakao.init(process.env.KAKAO_JAVASCRIPTKEY);
  }, []);

  const shareToKakao = () => {
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
            <h1>유형별 코스 추천</h1>
          </TestResultCard>
          <TestResultCard>
            <h1>가장 많은 유형</h1>
          </TestResultCard>
          <ButtonWrapper>
            <Button color="yellow" onClick={() => shareToKakao()}>
              테스트 공유하기
            </Button>
            <Link href="/travel/test">
              <Button>테스트 다시하기</Button>
            </Link>
          </ButtonWrapper>
          <div>
            <span>더 많은 여행정보가 궁금하다면 ?</span>
            <span>
              <Link href="/">혼자어때</Link>
            </span>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default TravelResult;
