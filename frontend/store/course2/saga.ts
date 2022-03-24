import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getPopularCourses } from './actions';
import { GetPopularCoursesAPI } from './api';
import { PopularCourse } from './types';

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

export function* course2Saga() {
  yield all([takeLatest(getPopularCourses.request, getPopularCoursesSaga)]);
}
