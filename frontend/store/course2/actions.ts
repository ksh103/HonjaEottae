import { createAsyncAction } from 'typesafe-actions';
import { PopularCourse } from './types';

// 인기코스 가져오기
export const GET_POPULAR_COURSES_REQUEST =
  'course2/GET_POPULAR_COURSES_REQUEST';
export const GET_POPULAR_COURSES_SUCCESS =
  'course2/GET_POPULAR_COURSES_SUCCESS';
export const GET_POPULAR_COURSES_FAILURE =
  'course2/GET_POPULAR_COURSES_FAILURE';

// 액션 생성 함수
export const getPopularCourses = createAsyncAction(
  GET_POPULAR_COURSES_REQUEST,
  GET_POPULAR_COURSES_SUCCESS,
  GET_POPULAR_COURSES_FAILURE,
)<number, PopularCourse[], Error>();
