import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getTestResult, saveTestResult } from './actions';
import { GetTestResultAPI, SaveTestResultAPI } from './apis';

function* getTestResultSaga() {
  try {
    const result: number[] = yield call(GetTestResultAPI);
    yield put(getTestResult.success(result));
  } catch (error) {
    console.error(error);
  }
}

function* saveTestResultSaga({
  payload,
}: ReturnType<typeof saveTestResult.request>) {
  try {
    const result: number = yield call(SaveTestResultAPI, payload);
    yield put(saveTestResult.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* travelSaga() {
  yield all([
    takeLatest(getTestResult.request, getTestResultSaga),
    takeLatest(saveTestResult.request, saveTestResultSaga),
  ]);
}
