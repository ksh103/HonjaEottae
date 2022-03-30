import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCourseDetail, getMainData } from './actions';
import { GetCourseDetailAPI, GetMainDataAPI } from './api';
import { CourseDetail, MainData } from './types';

function* getMainDataSaga({ payload }: ReturnType<typeof getMainData.request>) {
  try {
    const result: MainData = yield call(GetMainDataAPI);
    yield put(getMainData.success(result));
  } catch (error) {
    console.error(error);
  }
}

function* getCourseDetailSaga({
  payload,
}: ReturnType<typeof getCourseDetail.request>) {
  try {
    const result: CourseDetail = yield call(GetCourseDetailAPI, payload);
    yield put(getCourseDetail.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* course2Saga() {
  yield all([
    takeLatest(getMainData.request, getMainDataSaga),
    takeLatest(getCourseDetail.request, getCourseDetailSaga),
  ]);
}
