import { all, call, put, takeLatest } from 'redux-saga/effects';
import { recommendCourse, searchCourse } from './actions';
import { RecommendCourseAPI, SearchCourseAPI } from './api';
import { CourseDetail, SearchCourse } from './types';

function* searchCourseSaga({
  payload: name,
}: ReturnType<typeof searchCourse.request>) {
  try {
    const result: SearchCourse[] = yield call(SearchCourseAPI, { name });
    yield put(searchCourse.success(result));
  } catch (error) {
    console.error(error);
  }
}

function* recommendCourseSaga({
  payload,
}: ReturnType<typeof recommendCourse.request>) {
  try {
    const result: CourseDetail = yield call(RecommendCourseAPI, payload);
    yield put(recommendCourse.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* courseSaga() {
  yield all([
    takeLatest(searchCourse.request, searchCourseSaga),
    takeLatest(recommendCourse.request, recommendCourseSaga),
  ]);
}
