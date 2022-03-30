import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import course, { courseSaga, CourseState } from './course';
import course2, { course2Saga, Course2State } from './course2';
import test, { testSaga, TestState } from './test';
import location, { locationSaga, LocationState } from './location';
import user, { userSaga, UserState } from './user';
import register, { registerSaga, RegisterState } from './register';
import tour, { tourSaga, TourState } from './tour';

export function* rootSaga() {
  yield all([
    userSaga(),
    courseSaga(),
    testSaga(),
    course2Saga(),
    locationSaga(),
    registerSaga(),
    tourSaga(),
  ]);
}

const rootReducer = combineReducers({
  user,
  course,
  test,
  course2,
  location,
  register,
  tour,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  course: CourseState;
  test: TestState;
  course2: Course2State;
  location: LocationState;
  register: RegisterState;
  tour: TourState;
};
