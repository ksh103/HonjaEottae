import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export type MyCourse = {
  id: number;
  title: string;
  data: string;
};

export type Like = {
  id: number;
};

export type SignUp = {
  userEmail: string;
  userName: string;
  userPassword: string;
};

export type SignIn = {
  userEmail: string;
  userPassword: string;
};

export type SignInSuccess = {
  userEmail: string;
  token: string;
};

export type UserInfo = {
  userId: string;
  tourTestId: string;
  userName: string;
};

export type UserState = {
  userInfo: UserInfo;
  myCourses: MyCourse[];
  likes: Like[];
  isLogin: boolean;
  isSignUp: boolean;
};
