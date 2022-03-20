import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user, { userSaga, UserState } from './user';

export function* rootSaga() {
  yield all([userSaga]);
}

export const rootReducer = combineReducers({
  user,
});

export type RootState = {
  user: UserState;
};
