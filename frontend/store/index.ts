import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import searchCourse, { courseSaga, list } from './course';
import travel, { travelSaga, TravelState } from './travel';
import user, { userSaga, UserState } from './user';

export function* rootSaga() {
  yield all([userSaga(), courseSaga(), travelSaga()]);
}

const rootReducer = combineReducers({
  user,
  searchCourse,
  travel,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  searchCourse: list;
  travel: TravelState;
};
