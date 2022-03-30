import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTestResult } from './actions';
import { GetTestResultAPI } from './api';

function* getTestResultSaga() {
  try {
    const result: number[] = yield call(GetTestResultAPI);
    yield put(getTestResult.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* travelSaga() {
  yield all([takeLatest(getTestResult.request, getTestResultSaga)]);
}
