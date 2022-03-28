import { createAsyncAction } from 'typesafe-actions';
import { CourseRegister, SearchTourlist } from './types';

export const SEARCH_TOURLIST_REQUEST = 'register/SEARCH_TOURLIST_REQUEST';
export const SEARCH_TOURLIST_SUCCESS = 'register/SEARCH_TOURLIST_SUCCESS';
export const SEARCH_TOURLIST_FAILURE = 'register/SEARCH_TOURLIST_FAILURE';

export const COURSE_REGISTER_REQUEST = 'register/COURSE_REGISTER_REQUEST';
export const COURSE_REGISTER_SUCCESS = 'register/COURSE_REGISTER_SUCCESS';
export const COURSE_REGISTER_FAILURE = 'register/COURSE_REGISTER_FAILURE';

export const searchTourlist = createAsyncAction(
  SEARCH_TOURLIST_REQUEST,
  SEARCH_TOURLIST_SUCCESS,
  SEARCH_TOURLIST_FAILURE,
)<string, SearchTourlist[], Error>();

export const courseRegitser = createAsyncAction(
  COURSE_REGISTER_REQUEST,
  COURSE_REGISTER_SUCCESS,
  COURSE_REGISTER_FAILURE,
)<CourseRegister, string, Error>();
