import type { NextPage } from 'next';
import { TEST } from '../../assets/test';
import Link from 'next/link';
import {
  Header,
  Wrapper,
  TestButton,
  TestQuestion,
  Button,
  ButtonWrapper,
} from '../../components/Travel/Travel.style';

const TravelTest: NextPage = () => {
  return (
    <>
      <Header>
        <Link href="/">
          <label>혼자어때</label>
        </Link>
      </Header>
      <Wrapper>
        <h1>여행 성향 테스트</h1>
        <TestQuestion>Q. {TEST.questions[0].question}</TestQuestion>
        <TestButton>
          <div>{TEST.questions[0].answers[0].content}</div>
          <div>{TEST.questions[0].answers[1].content}</div>
        </TestButton>
        <ButtonWrapper>
          <Link href="/travel/result">
            <Button>결과 보기</Button>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default TravelTest;
