import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { TEST } from '../../assets/test';
import { useRouter } from 'next/router';
import {
  Wrapper,
  TestButton,
  TestQuestion,
} from '../../components/Travel/Travel.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { saveTestResult } from '../../store/user';
import Nav from '../../components/Nav/Nav';

const TravelTest: NextPage = () => {
  const { isLogin, userInfo } = useSelector((state: RootState) => state.user);
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const saveTest = useCallback(
    (type: number) => {
      localStorage.setItem('type', type + '');
      let id = 0;
      if (isLogin) id = userInfo.userId;
      dispatch(saveTestResult.request({ userId: id, tourTestId: type + 1 }));
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
      <Nav />
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
      </Wrapper>
    </>
  );
};

export default TravelTest;
