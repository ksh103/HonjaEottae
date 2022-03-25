import axios from 'axios';
import { SignIn, SignUp } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function SignInAPI({ userEmail, userPassword }: SignIn) {
  const datas = await axios
    .post(`${BASE_URL}user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
    .then(res => res.data.accessToken);
  return datas;
}

export async function SignUpAPI({ userEmail, userName, userPassword }: SignUp) {
  const datas = await axios.post(`${BASE_URL}user/signup`, {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  });
  console.log('회원가입 결과', datas);
  return datas;
}
