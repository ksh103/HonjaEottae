import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchCourse } from './actions';
import { SearchCourseAPI } from './apis';
import { list } from './types';

function* searchCourseSaga({
  payload: name,
}: ReturnType<typeof searchCourse.request>) {
  try {
    console.log(name);
    const result: list = yield call(SearchCourseAPI, { name });
    console.log(result);
    yield put(searchCourse.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* courseSaga() {
  yield all([takeLatest(searchCourse.request, searchCourseSaga)]);
}
