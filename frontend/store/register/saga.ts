import { all, call, put, takeLatest } from 'redux-saga/effects';
import { courseRegitser, searchTourlist } from './actions';
import { courseRegisterAPI, searchTourlistAPI } from './api';
import { SearchTourlist } from './types';

function* searchTourlistSaga({
  payload,
}: ReturnType<typeof searchTourlist.request>) {
  try {
    const result: SearchTourlist[] = yield call(searchTourlistAPI, payload);
    yield put(searchTourlist.success(result));
  } catch (error) {
    console.log(error);
  }
}

function* courseRegisterSaga({
  payload,
}: ReturnType<typeof courseRegitser.request>) {
  try {
    const result: string = yield call(courseRegisterAPI, payload);
    yield put(courseRegitser.success(result));
  } catch (error) {
    console.log(error);
  }
}

export function* registerSaga() {
  yield all([
    takeLatest(searchTourlist.request, searchTourlistSaga),
    takeLatest(courseRegitser.request, courseRegisterSaga),
  ]);
}
