import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCourseDetail, getPopularCourses } from './actions';
import { GetCourseDetailAPI, GetPopularCoursesAPI } from './api';
import { CourseDetail, CourseInfo, PopularCourse } from './types';

function* getPopularCoursesSaga({
  payload,
}: ReturnType<typeof getPopularCourses.request>) {
  try {
    const result: PopularCourse[] = yield call(GetPopularCoursesAPI, payload);
    yield put(getPopularCourses.success(result));
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
    takeLatest(getPopularCourses.request, getPopularCoursesSaga),
    takeLatest(getCourseDetail.request, getCourseDetailSaga),
  ]);
}
