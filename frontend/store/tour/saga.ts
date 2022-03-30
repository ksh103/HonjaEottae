import { all, call, put, takeLatest } from 'redux-saga/effects';
import { startTour } from './actions';

function* startTourSaga() {}

export function* tourSaga() {
  yield all([takeLatest(startTour.request, startTourSaga)]);
}
