import type { NextPage } from 'next';
import Link from 'next/link';
import { LoginWrapper, Button, SignupBlock } from '../Login/Login.styled';

const SignupPage: NextPage = () => {
  return (
    <>
      <LoginWrapper>
        <Link href="/">
          <div id="title">혼자어때. </div>
        </Link>
        <SignupBlock>
          <div id="loginName">Signup</div>
          <input type="text" placeholder="이름" />
          <input type="password" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 재확인" />
          <Button id="loginBtn">회원가입</Button>
        </SignupBlock>
      </LoginWrapper>
    </>
  );
};

export default SignupPage;
