import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  LIKE_COURSE_SUCCESS,
  UNLIKE_COURSE_SUCCESS,
  SET_LOG_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  USER_INFO_SUCCESS,
  SAVE_TEST_RESULT_SUCCESS,
  MY_COURSE_SUCCESS,
  VISIT_COURSE_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: UserState = {
  userInfo: {
    userId: 0,
    tourTestId: 0,
    userName: '',
  },
  userCourses: [],
  userLikes: [],
  isLogin: false,
  isSignUp: false,
  userVisitCourses: [],
};

const user = createReducer<UserState, UserAction>(initialState, {
  [SIGN_IN_SUCCESS]: state =>
    produce(state, draft => {
      draft.isLogin = true;
    }),
  [SIGN_UP_SUCCESS]: state =>
    produce(state, draft => {
      draft.isSignUp = true;
    }),
  [SET_LOG_IN]: state =>
    produce(state, draft => {
      draft.isLogin = true;
    }),
  [USER_INFO_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.userInfo = action.payload.userInfo;
      draft.userCourses = action.payload.userCourses;
      draft.userLikes = action.payload.userLikes;
      draft.userVisitCourses = action.payload.userVisitCourses;
      console.log('방문코스 기록 리듀서', action.payload.userVisitCourses);
    }),
  [LIKE_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.userLikes.push({
        courseId: action.payload.courseId,
        courseName: action.payload.courseName,
        image: action.payload.courseName,
      });
    }),
  [UNLIKE_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.userLikes = draft.userLikes.filter(
        data => data.courseId !== action.payload.courseId,
      );
    }),
  [SAVE_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.userInfo.tourTestId = action.payload;
    }),
  [MY_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      console.log('코스등록 성공', action);
      draft.userCourses = action.payload;
    }),
  // [VISIT_COURSE_SUCCESS]: (state, action) =>
  //   produce(state, draft => {
  //     console.log('방문코스 기록 리듀서', action);
  //     draft.visitCourse = action.payload;
  //   }),
});

export default user;
