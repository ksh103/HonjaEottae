import axios from 'axios';
import { SignIn, SignUp } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function SignInAPI({ userEmail, userPassword }: SignIn) {
  const datas = await axios
    .post(`${BASE_URL}user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
    .then(res => res.data);
  const result = { userEmail: datas.userEmail, token: datas.accessToken };
  return result;
}

export async function SignUpAPI({ userEmail, userName, userPassword }: SignUp) {
  const datas = await axios.post(`${BASE_URL}user/signup`, {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  });
  return datas;
}

export async function UserInfoAPI(userEmail: string | null) {
  const datas = await axios
    .get(`${BASE_URL}user/user/{userEmail}?userEmail=${userEmail}`)
    .then(res => res.data);
  return datas;
}
