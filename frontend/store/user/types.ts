import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export type UserInfo = {
  name: string;
  email: string;
};

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

export type UserState = {
  userInfo: UserInfo;
  myCourses: MyCourse[];
  likes: Like[];
  isLogin: boolean;
};
