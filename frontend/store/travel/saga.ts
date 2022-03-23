import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTestResult } from './actions';
import { getTestResultAPI } from './apis';

function* getTestResultSaga() {
  try {
    const result: number[] = yield call(getTestResultAPI);
    yield put(getTestResult.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* travelSaga() {
  yield all([takeLatest(getTestResult.request, getTestResultSaga)]);
}
