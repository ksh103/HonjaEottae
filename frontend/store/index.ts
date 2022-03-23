import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import searchCourse, { courseSaga, list } from './course';
import user, { userSaga, UserState } from './user';

export function* rootSaga() {
  yield all([userSaga(), courseSaga()]);
}

export const rootReducer = combineReducers({
  user,
  searchCourse,
});

export type RootState = {
  user: UserState;
  searchCourse: list;
};
