import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { signIn } from '../../store/user';
import { LoginBlock, LoginWrapper, Button } from './Login.styled';
const LoginPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLogin } = useSelector((state: RootState) => state.user); // 로그인 체크
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const onIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const LoginData = useCallback(() => {
    dispatch(signIn.request({ userEmail: id, userPassword: pw }));
  }, [dispatch, id, pw]);

  const LoginButton = () => {
    if (id === '') alert('아이디를 입력해주세요');
    else if (pw === '') alert('비밀번호를 입력해주세요');
    else LoginData();
  };

  useEffect(() => {
    if (isLogin) {
      // 로그인 성공 시 메인페이지로 이동
      router.push('/');
    }
  }, [isLogin]);
  return (
    <>
      <LoginWrapper>
        <Link href="/">
          <div id="title">혼자어때. </div>
        </Link>
        <LoginBlock>
          <div id="loginName">Login</div>
          <input
            type="text"
            onChange={onIdHandler}
            placeholder="아이디를 입력해주세요"
          />
          <input
            type="password"
            onChange={onPwHandler}
            placeholder="비밀번호를 입력해주세요"
          />
          <Button id="loginBtn" onClick={LoginButton}>
            로그인
          </Button>
          <Link href="/signup">
            <div id="signup">회원가입</div>
          </Link>
        </LoginBlock>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;
