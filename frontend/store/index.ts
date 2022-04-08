import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import course, { courseSaga, CourseState } from './course';
import detail, { detailSaga, DetailState } from './detail';
import travel, { travelSaga, TravelState } from './travel';
import location, { locationSaga, LocationState } from './location';
import user, { userSaga, UserState } from './user';
import register, { registerSaga, RegisterState } from './register';
import record, { recordSaga, RecordState } from './record';
import chat, { ChatState } from './chat';

export function* rootSaga() {
  yield all([
    userSaga(),
    courseSaga(),
    travelSaga(),
    detailSaga(),
    locationSaga(),
    registerSaga(),
    recordSaga(),
  ]);
}

const rootReducer = combineReducers({
  user,
  course,
  travel,
  detail,
  location,
  register,
  record,
  chat,
});

export default rootReducer;

export type RootState = {
  user: UserState;
  course: CourseState;
  travel: TravelState;
  detail: DetailState;
  location: LocationState;
  register: RegisterState;
  record: RecordState;
  chat: ChatState;
};
