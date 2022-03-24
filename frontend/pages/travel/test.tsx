import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { TEST } from '../../assets/test';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Header,
  Wrapper,
  TestButton,
  TestQuestion,
  Button,
  ButtonWrapper,
} from '../../components/Travel/Travel.style';
import { useDispatch } from 'react-redux';
import { saveTestResult } from '../../store/travel';

const TravelTest: NextPage = () => {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const saveTest = useCallback(
    (type: number) => {
      dispatch(saveTestResult.request({ userId: 0, type: type }));
    },
    [dispatch],
  );

  const selectAnswer = (no: number, type: number) => {
    if (no === -1) {
      saveTest(type);
      router.push('/travel/result');
    } else {
      setStep(no);
    }
  };

  return (
    <>
      <Header>
        <Link href="/">
          <label>혼자어때</label>
        </Link>
      </Header>
      <Wrapper>
        <h1 className="title">여행 성향 테스트</h1>
        <TestQuestion>Q. {TEST.questions[step].question}</TestQuestion>
        <TestButton>
          {TEST.questions[step].answers.map((answer, idx) => {
            return (
              <div
                key={idx}
                onClick={() => selectAnswer(answer.no, answer.result)}
              >
                {answer.content}
              </div>
            );
          })}
        </TestButton>
        {/* <ButtonWrapper>
          <Link href="/travel/result">
            <Button>결과 보기</Button>
          </Link>
        </ButtonWrapper> */}
      </Wrapper>
    </>
  );
};

export default TravelTest;
