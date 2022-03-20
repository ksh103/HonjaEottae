import { UserState, UserAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LIKE_COURSE_SUCCESS, UNLIKE_COURSE_SUCCESS } from './actions';
import produce from 'immer';

const initialState: UserState = {
  userInfo: {
    name: '',
    email: '',
  },
  myCourses: [],
  likes: [],
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
});

export default user;
