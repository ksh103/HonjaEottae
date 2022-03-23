import { createReducer } from 'typesafe-actions';
import { SEARCH_COURSE_SUCCESS } from './actions';
import { list, SearchCourseActions } from './types';

const initialSearchCourse: list = [
  {
    courseId: 0,
    courseName: '',
  },
];

const searchCourse = createReducer<list, SearchCourseActions>(
  initialSearchCourse,
  {
    [SEARCH_COURSE_SUCCESS]: (state, { payload: list }) => state,
  },
);

export default searchCourse;
