import { all, call, put, takeLatest } from 'redux-saga/effects';
import { checkTour, endTour, markStamp, startTour } from './actions';
import { CheckTourAPI, EndTourAPI, MarkStampAPI, StartTourAPI } from './api';
import { RecordState, Stamp } from './types';

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
    const result: RecordState = yield call(CheckTourAPI, payload);
    yield put(checkTour.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* markStampSaga({ payload }: ReturnType<typeof markStamp.request>) {
  try {
    const result: Stamp = yield call(MarkStampAPI, payload);
    yield put(markStamp.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* recordSaga() {
  yield all([
    takeLatest(startTour.request, startTourSaga),
    takeLatest(endTour.request, endTourSaga),
    takeLatest(checkTour.request, checkTourSaga),
    takeLatest(markStamp.request, markStampSaga),
  ]);
}
