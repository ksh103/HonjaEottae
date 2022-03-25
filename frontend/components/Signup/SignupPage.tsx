import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { signUp } from '../../store/user';
import { LoginWrapper, Button, SignupBlock } from '../Login/Login.styled';

const SignupPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isSignUp } = useSelector((state: RootState) => state.user);
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [checkPw, setCheckPw] = useState<string>('');

  const onIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onCheckPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPw(e.target.value);
  };

  const signUpButton = () => {
    if (id == '') alert('아이디를 입력해주세요');
    else if (name == '') alert('이름을 입력해주세요');
    else if (pw == '') alert('비밀번호를 입력해주세요');
    else if (pw != checkPw) alert('비밀번호를 확인해주세요');
    else {
      dispatch(
        signUp.request({ userEmail: id, userPassword: pw, userName: name }),
      );
    }
  };
  useEffect(() => {
    if (isSignUp) {
      router.push('/login');
    }
  }, [isSignUp]);
  return (
    <>
      <LoginWrapper>
        <Link href="/">
          <div id="title">혼자어때. </div>
        </Link>
        <SignupBlock>
          <div id="loginName">Signup</div>
          <input type="text" onChange={onNameHandler} placeholder="이름" />
          <input type="text" onChange={onIdHandler} placeholder="아이디" />
          <input
            type="password"
            onChange={onPwHandler}
            placeholder="비밀번호"
          />
          <input
            type="password"
            onChange={onCheckPwHandler}
            placeholder="비밀번호 재확인"
          />
          <Button id="loginBtn" onClick={signUpButton}>
            회원가입
          </Button>
        </SignupBlock>
      </LoginWrapper>
    </>
  );
};

export default SignupPage;
