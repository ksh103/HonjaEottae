import { createReducer } from 'typesafe-actions';
import { Course2Action, Course2State } from './types';
import produce from 'immer';
import {
  GET_COURSE_DETAIL_SUCCESS,
  GET_POPULAR_COURSES_SUCCESS,
} from './actions';

const initialCourseInfoState = {
  // courseId: 0,
  courseName: '',
  courseContent: '',
  courseDistance: '',
  courseDays: '',
  courseHits: 0,
  // courseImage: '',
};

const initialState: Course2State = {
  popularCourses: [],
  courseId: 0,
  courseInfo: initialCourseInfoState,
  courseTourist: [],
  courseReview: [],
  courseType: [],
};

const course2 = createReducer<Course2State, Course2Action>(initialState, {
  [GET_POPULAR_COURSES_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.popularCourses = action.payload;
    }),
  [GET_COURSE_DETAIL_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.courseId = action.payload.courseId;
      draft.courseInfo = action.payload.courseInfo;
      draft.courseTourist = action.payload.courseTourist;
      draft.courseReview = action.payload.courseReview;
      draft.courseType = action.payload.courseType;
    }),
});

export default course2;
