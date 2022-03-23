import { createAsyncAction } from 'typesafe-actions';

export const GET_TEST_RESULT_REQUEST = 'travel/GET_TEST_RESULT_REQUEST';
export const GET_TEST_RESULT_SUCCESS = 'travel/GET_TEST_RESULT_SUCCESS';
export const GET_TEST_RESULT_FAILURE = 'travel/GET_TEST_RESULT_FAILURE'; // 여행성향테스트 결과 합계 가져오기
export const SAVE_USER_TEST_RESULT_REQUEST =
  'travel/SAVE_USER_TEST_RESULT_REQUEST';
export const SAVE_USER_TEST_RESULT_SUCCESS =
  'travel/SAVE_USER_TEST_RESULT_SUCCESS';
export const SAVE_USER_TEST_RESULT_FAILURE =
  'travel/SAVE_USER_TEST_RESULT_FAILURE'; // 여행성향테스트결과저장(회원)
export const GET_RECOMMEND_COURSE_REQUEST =
  'travel/GET_RECOMMEND_COURSE_REQUEST';
export const GET_RECOMMEND_COURSE_SUCCESS =
  'travel/GET_RECOMMEND_COURSE_SUCCESS';
export const GET_RECOMMEND_COURSE_FAILURE =
  'travel/GET_RECOMMEND_COURSE_FAILURE'; // 추천코스결과값가져오기

// 액션 생성 함수
export const getTestResult = createAsyncAction(
  GET_TEST_RESULT_REQUEST,
  GET_TEST_RESULT_SUCCESS,
  GET_TEST_RESULT_FAILURE,
)<void, number[], Error>();
