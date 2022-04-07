import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  cancelTour,
  endTour,
  getTag,
  getTourDetail,
  getUserCount,
  markStamp,
  startTour,
} from './actions';
import {
  CancelTourAPI,
  EndTourAPI,
  GetCourseUserCountAPI,
  GetTagAPI,
  GetTourDetailAPI,
  MarkStampAPI,
  StartTourAPI,
} from './api';
import { RecordState, TagCode } from './types';

function* getTourDetailSaga({
  payload,
}: ReturnType<typeof getTourDetail.request>) {
  try {
    const result: RecordState = yield call(GetTourDetailAPI, payload);
    yield put(getTourDetail.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* startTourSaga({ payload }: ReturnType<typeof startTour.request>) {
  try {
    const result: number = yield call(StartTourAPI, payload);
    yield put(startTour.success(result));
    yield put(getTourDetail.request(payload.userId));
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
function* cancelTourSaga({ payload }: ReturnType<typeof cancelTour.request>) {
  try {
    yield call(CancelTourAPI, payload);
    yield put(cancelTour.success(payload.tourId));
  } catch (error) {
    console.error(error);
  }
}
function* markStampSaga({ payload }: ReturnType<typeof markStamp.request>) {
  try {
    const result: number = yield call(MarkStampAPI, payload);
    yield put(markStamp.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* getTagSaga() {
  try {
    const result: TagCode[] = yield call(GetTagAPI);
    yield put(getTag.success(result));
  } catch (error) {
    console.error(error);
  }
}
function* getUserCountSaga({
  payload,
}: ReturnType<typeof getUserCount.request>) {
  try {
    const result: number = yield call(GetCourseUserCountAPI, payload);
    yield put(getUserCount.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* recordSaga() {
  yield all([
    takeLatest(getTourDetail.request, getTourDetailSaga),
    takeLatest(startTour.request, startTourSaga),
    takeLatest(endTour.request, endTourSaga),
    takeLatest(cancelTour.request, cancelTourSaga),
    takeLatest(markStamp.request, markStampSaga),
    takeLatest(getTag.request, getTagSaga),
    takeLatest(getUserCount.request, getUserCountSaga),
  ]);
}
