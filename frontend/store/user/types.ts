import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export type Course = {
  courseId: number;
  courseName: string;
  image: string;
};

export type TestResult = {
  userId: number;
  tourTestId: number;
};

export type Bookmark = {
  courseId: number;
  courseName: string;
  userId: number;
  image: string;
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
  userId: number;
  tourTestId: number;
  userName: string;
};

export type UserDetail = {
  userInfo: UserInfo;
  userCourses: Course[];
  userLikes: Course[];
  userVisitCourses: VisitCourse[];
};

export type VisitCourse = {
  courseId: number;
  touristLat: number;
  touristLng: number;
};

export type UserState = {
  userInfo: UserInfo;
  userCourses: Course[];
  userLikes: Course[];
  isLogin: boolean;
  isSignUp: boolean;
  userVisitCourses: VisitCourse[];
};
