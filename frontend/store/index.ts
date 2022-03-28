import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import course, { courseSaga, CourseState } from './course';
import course2, { course2Saga, Course2State } from './course2';
import travel, { travelSaga, TravelState } from './travel';
import location, { locationSaga, LocationState } from './location';
import user, { userSaga, UserState } from './user';
import register, { registerSaga, RegisterState } from './register';

export function* rootSaga() {
  yield all([
    userSaga(),
    courseSaga(),
    travelSaga(),
    course2Saga(),
    locationSaga(),
    registerSaga(),
  ]);
}

const rootReducer = combineReducers({
  user,
  course,
  travel,
  course2,
  location,
  register,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  course: CourseState;
  travel: TravelState;
  course2: Course2State;
  location: LocationState;
  register: RegisterState;
};
