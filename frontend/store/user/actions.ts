import { createAction, createAsyncAction } from 'typesafe-actions';
import { Bookmark, SignIn, SignInSuccess, SignUp, UserDetail } from './types';

export const LIKE_COURSE_REQUEST = 'user/LIKE_COURSE_REQUEST';
export const LIKE_COURSE_SUCCESS = 'user/LIKE_COURSE_SUCCESS';
export const LIKE_COURSE_FAILURE = 'user/LIKE_COURSE_FAILURE';

export const UNLIKE_COURSE_REQUEST = 'user/UNLIKE_COURSE_REQUEST';
export const UNLIKE_COURSE_SUCCESS = 'user/UNLIKE_COURSE_SUCCESS';
export const UNLIKE_COURSE_FAILURE = 'user/UNLIKE_COURSE_FAILURE';

export const SIGN_IN_REQUEST = 'user/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const USER_INFO_REQUEST = 'user/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'user/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'user/USER_INFO_FAILURE';

export const SET_LOG_OUT = 'user/SET_LOG_OUT';
export const SET_LOG_IN = 'user/SET_LOG_IN';

export const signIn = createAsyncAction(
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
)<SignIn, SignInSuccess, Error>();

export const signUp = createAsyncAction(
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)<SignUp, string, Error>();

export const userInfo = createAsyncAction(
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
)<string, UserDetail, Error>();

export const logIn = createAction(SET_LOG_IN)();

export const likeCourse = createAsyncAction(
  LIKE_COURSE_REQUEST,
  LIKE_COURSE_SUCCESS,
  LIKE_COURSE_FAILURE,
)<Bookmark, Bookmark, Error>();

export const unlikeCourse = createAsyncAction(
  UNLIKE_COURSE_REQUEST,
  UNLIKE_COURSE_SUCCESS,
  UNLIKE_COURSE_FAILURE,
)<Bookmark, Bookmark, Error>();
