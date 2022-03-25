import { likeCourse, signIn, signUp } from './actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SignInAPI, SignUpAPI } from './api';

function* likeCourseSaga({
  payload: id,
}: ReturnType<typeof likeCourse.request>) {
  try {
    yield put(likeCourse.success(id));
  } catch (error) {
    console.error(error);
  }
}

function* signInSaga({ payload }: ReturnType<typeof signIn.request>) {
  try {
    const result: string = yield call(SignInAPI, payload);
    yield put(signIn.success(result));
    sessionStorage.setItem('userToken', result); // userToken 세션스토리지 저장
  } catch (error) {
    alert('아이디나 비밀번호가 일치하지 않습니다.');
    console.log(error);
  }
}

function* signUpSaga({ payload }: ReturnType<typeof signUp.request>) {
  try {
    const result: number = yield call(SignUpAPI, payload);
    // 로그인 페이지로 이동
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield all([
    takeLatest(likeCourse.request, likeCourseSaga),
    takeLatest(signIn.request, signInSaga),
    takeLatest(signUp.request, signUpSaga),
  ]);
}
