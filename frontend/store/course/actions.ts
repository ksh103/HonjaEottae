import { createAsyncAction } from 'typesafe-actions';
import { list } from './types';

export const SEARCH_COURSE_REQUEST = 'course/SEARCH_COURSE_REQUEST';
export const SEARCH_COURSE_SUCCESS = 'course/SEARCH_COURSE_SUCCESS';
export const SEARCH_COURSE_FAILURE = 'course/SEARCH_COURSE_FAILURE';

export const searchCourse = createAsyncAction(
  SEARCH_COURSE_REQUEST,
  SEARCH_COURSE_SUCCESS,
  SEARCH_COURSE_FAILURE,
)<string, list, Error>();
