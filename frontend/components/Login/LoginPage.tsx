import type { NextPage } from 'next';
import Link from 'next/link';
import { LoginBlock, LoginWrapper, Button } from './Login.styled';
const LoginPage: NextPage = () => {
  return (
    <>
      <LoginWrapper>
        <Link href="/">
          <div id="title">혼자어때. </div>
        </Link>
        <LoginBlock>
          <div id="loginName">Login</div>
          <input type="text" placeholder="아이디를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <Button id="loginBtn">로그인</Button>
          <Link href="/signup">
            <div id="signup">회원가입</div>
          </Link>
        </LoginBlock>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;
