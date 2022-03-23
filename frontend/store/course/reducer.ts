import { ActionType, createReducer } from 'typesafe-actions';
import { SEARCH_COURSE_SUCCESS, SET_SEARCH_KEYWORD } from './actions';
import { CourseState, CourseAction } from './types';
import produce from 'immer';

const initialSearchCourse: CourseState = {
  searchCourses: [],
};

const course = createReducer<CourseState, CourseAction>(initialSearchCourse, {
  [SEARCH_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.searchCourses = action.payload;
    }),
});

export default course;
