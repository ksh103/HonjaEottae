import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchCourse } from './actions';
import { SearchCourseAPI } from './apis';
import { SearchCourse } from './types';

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

export function* courseSaga() {
  yield all([takeLatest(searchCourse.request, searchCourseSaga)]);
}
