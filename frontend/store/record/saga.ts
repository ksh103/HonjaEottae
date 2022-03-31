import { all, call, put, takeLatest } from 'redux-saga/effects';
import { checkTour, endTour, startTour } from './actions';
import { CheckTourAPI, EndTourAPI, StartTourAPI } from './api';

function* startTourSaga({ payload }: ReturnType<typeof startTour.request>) {
  try {
    const result: number = yield call(StartTourAPI, payload);
    yield put(startTour.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* endTourSaga({ payload }: ReturnType<typeof endTour.request>) {
  try {
    const result: number = yield call(EndTourAPI, payload);
    yield put(endTour.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* checkTourSaga({ payload }: ReturnType<typeof checkTour.request>) {
  try {
    const result: number = yield call(CheckTourAPI, payload);
    yield put(checkTour.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* recordSaga() {
  yield all([
    takeLatest(startTour.request, startTourSaga),
    takeLatest(endTour.request, endTourSaga),
    takeLatest(checkTour.request, checkTourSaga),
  ]);
}
