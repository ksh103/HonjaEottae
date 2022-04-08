import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getAreaCourses, getCourseDetail, getMainData } from './actions';
import { GetAreaCoursesAPI, GetCourseDetailAPI, GetMainDataAPI } from './api';
import { AreaCourse, CourseDetail, MainData } from './types';

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

function* getAreaCoursesSaga({
  payload,
}: ReturnType<typeof getAreaCourses.request>) {
  try {
    const result: AreaCourse[] = yield call(GetAreaCoursesAPI, payload);
    yield put(getAreaCourses.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* detailSaga() {
  yield all([
    takeLatest(getMainData.request, getMainDataSaga),
    takeLatest(getCourseDetail.request, getCourseDetailSaga),
    takeLatest(getAreaCourses.request, getAreaCoursesSaga),
  ]);
}
