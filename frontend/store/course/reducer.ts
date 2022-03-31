import { ActionType, createReducer } from 'typesafe-actions';
import {
  RESET_SEARCH_COURSES,
  SEARCH_COURSE_SUCCESS,
  SET_SEARCH_KEYWORD,
} from './actions';
import { CourseState, CourseAction } from './types';
import produce from 'immer';

const initialState: CourseState = {
  searchCourses: [],
  searchKeyword: '',
};

const course = createReducer<CourseState, CourseAction>(initialState, {
  [SEARCH_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.searchCourses = action.payload;
    }),
  [SET_SEARCH_KEYWORD]: (state, action) =>
    produce(state, draft => {
      draft.searchKeyword = action.payload;
    }),
  [RESET_SEARCH_COURSES]: state =>
    produce(state, draft => {
      draft.searchCourses = [];
    }),
});

export default course;
