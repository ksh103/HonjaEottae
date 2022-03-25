import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  LIKE_COURSE_SUCCESS,
  SET_LOG_IN,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  USER_INFO_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: UserState = {
  userInfo: {
    userId: '',
    tourTestId: '',
    userName: '',
  },
  myCourses: [],
  likes: [],
  isLogin: false,
  isSignUp: false,
};

const user = createReducer<UserState, UserAction>(initialState, {
  [LIKE_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.likes.push(action.payload);
    }),
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
      draft.userInfo = action.payload;
    }),
});

export default user;
