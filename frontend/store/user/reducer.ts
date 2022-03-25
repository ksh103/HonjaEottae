import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  LIKE_COURSE_SUCCESS,
  SET_LOG_OUT,
  SIGN_IN_SUCCESS,
  UNLIKE_COURSE_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: UserState = {
  userInfo: {
    name: '',
    email: '',
  },
  myCourses: [],
  likes: [],
  isLogin: false,
};

const user = createReducer<UserState, UserAction>(initialState, {
  [LIKE_COURSE_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.likes.push(action.payload);
    }),
  //   [UNLIKE_COURSE_SUCCESS]: (state, action) =>
  //     produce(state, draft => {
  //       draft.likes = draft.likes.filter(like => like !== action.payload);
  //     }),
  [SIGN_IN_SUCCESS]: state =>
    produce(state, draft => {
      draft.isLogin = true;
    }),

  [SET_LOG_OUT]: state =>
    produce(state, draft => {
      draft.isLogin = false;
    }),
});

export default user;
