import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  AreaCourse,
  Bookmark,
  Course,
  MonthCourse,
  MypageDetail,
  SignIn,
  SignInSuccess,
  SignUp,
  TestResult,
  UserDetail,
  VisitCourse,
} from './types';

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

// 마이페이지 최신화
export const MYPAGE_INFO_REQUEST = 'user/MYPAGE_INFO_REQUEST';
export const MYPAGE_INFO_SUCCESS = 'user/MYPAGE_INFO_SUCCESS';
export const MYPAGE_INFO_FAILURE = 'user/MYPAGE_INFO_FAILURE';

export const SET_LOG_OUT = 'user/SET_LOG_OUT';
export const SET_LOG_IN = 'user/SET_LOG_IN';
// 여행성향테스트 결과 저장
export const SAVE_TEST_RESULT_REQUEST = 'user/SAVE_TEST_RESULT_REQUEST';
export const SAVE_TEST_RESULT_SUCCESS = 'user/SAVE_TEST_RESULT_SUCCESS';
export const SAVE_TEST_RESULT_FAILURE = 'user/SAVE_TEST_RESULT_FAILURE';

// 내가만든 코스 불러오기
export const MY_COURSE_REQUEST = 'user/MY_COURSE_REQUEST';
export const MY_COURSE_SUCCESS = 'user/MY_COURSE_SUCCESS';
export const MY_COURSE_FAILURE = 'user/MY_COURSE_FAILURE';

// 내가 방문한 코스 조회(마이페이지 지도)
export const VISIT_COURSE_REQUEST = 'user/VISIT_COURSE_REQUEST';
export const VISIT_COURSE_SUCCESS = 'user/VISIT_COURSE_SUCCESS';
export const VISIT_COURSE_FAILURE = 'user/VISIT_COURSE_FAILURE';

// 내가 방문한 코스 선택(일기)
export const SET_SELECT_RECORD = 'user/SET_SELECT_RECORD';

// 회원 방문한 코스 월별 분석(마이페이지 좌측그래프)
export const MONTH_COURSE_REQUEST = 'user/MONTH_COURSE_REQUEST';
export const MONTH_COURSE_SUCCESS = 'user/MONTH_COURSE_SUCCESS';
export const MONTH_COURSE_FAILURE = 'user/MONTH_COURSE_FAILURE';

// 회원 방문한 지역 분석 (마이페이지 우측그래프)
export const AREA_COURSE_REQUEST = 'user/AREA_COURSE_REQUEST';
export const AREA_COURSE_SUCCESS = 'user/AREA_COURSE_SUCCESS';
export const AREA_COURSE_FAILURE = 'user/AREA_COURSE_FAILURE';

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

export const mypageInfo = createAsyncAction(
  MYPAGE_INFO_REQUEST,
  MYPAGE_INFO_SUCCESS,
  MYPAGE_INFO_FAILURE,
)<number, MypageDetail, Error>();

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

export const saveTestResult = createAsyncAction(
  SAVE_TEST_RESULT_REQUEST,
  SAVE_TEST_RESULT_SUCCESS,
  SAVE_TEST_RESULT_FAILURE,
)<TestResult, number, Error>();

export const myCourse = createAsyncAction(
  MY_COURSE_REQUEST,
  MY_COURSE_SUCCESS,
  MY_COURSE_FAILURE,
)<number, Course[], Error>();

export const visitCourse = createAsyncAction(
  VISIT_COURSE_REQUEST,
  VISIT_COURSE_SUCCESS,
  VISIT_COURSE_FAILURE,
)<number, VisitCourse[], Error>();

export const selectRecords = createAction(SET_SELECT_RECORD)<number>();

export const monthCourse = createAsyncAction(
  MONTH_COURSE_REQUEST,
  MONTH_COURSE_SUCCESS,
  MONTH_COURSE_FAILURE,
)<number, MonthCourse[], Error>();

export const areaCourse = createAsyncAction(
  AREA_COURSE_REQUEST,
  AREA_COURSE_SUCCESS,
  AREA_COURSE_FAILURE,
)<number, AreaCourse[], Error>();
