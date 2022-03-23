import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import course, { courseSaga, CourseState } from './course';
import travel, { travelSaga, TravelState } from './travel';
import user, { userSaga, UserState } from './user';

export function* rootSaga() {
  yield all([userSaga(), courseSaga(), travelSaga()]);
}

const rootReducer = combineReducers({
  user,
  course,
  travel,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  course: CourseState;
  travel: TravelState;
};
