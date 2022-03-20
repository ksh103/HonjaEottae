import { createAsyncAction } from 'typesafe-actions';
import { Like } from './types';

export const LIKE_COURSE_REQUEST = 'user/LIKE_COURSE_REQUEST';
export const LIKE_COURSE_SUCCESS = 'user/LIKE_COURSE_SUCCESS';
export const LIKE_COURSE_FAILURE = 'user/LIKE_COURSE_FAILURE';

export const UNLIKE_COURSE_REQUEST = 'user/UNLIKE_COURSE_REQUEST';
export const UNLIKE_COURSE_SUCCESS = 'user/UNLIKE_COURSE_SUCCESS';
export const UNLIKE_COURSE_FAILURE = 'user/UNLIKE_COURSE_FAILURE';

export const likeCourse = createAsyncAction(
  LIKE_COURSE_REQUEST,
  LIKE_COURSE_SUCCESS,
  LIKE_COURSE_FAILURE,
)<Like, Like, Error>();
