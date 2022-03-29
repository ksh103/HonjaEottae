import { all, call, put, takeLatest } from 'redux-saga/effects';
import { startTour } from './actions';

function* startTourSaga() {}

export function* recordSaga() {
  yield all([takeLatest(startTour.request, startTourSaga)]);
}
