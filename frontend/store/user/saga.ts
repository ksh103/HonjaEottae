import { likeCourse } from './actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* likeCourseSaga({
  payload: id,
}: ReturnType<typeof likeCourse.request>) {
  try {
    // const result = yield call(api, id);
    yield put(likeCourse.success(id));
  } catch (error) {
    console.error(error);
  }
}

export function* userSaga() {
  yield all([takeLatest(likeCourse.request, likeCourseSaga)]);
}
