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
});

export default user;
