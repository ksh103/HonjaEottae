import { likeCourse, signIn, signUp, userInfo } from './actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SignInAPI, SignUpAPI, UserInfoAPI } from './api';
import { SignInSuccess, UserInfo } from './types';

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
    const result: SignInSuccess = yield call(SignInAPI, payload);
    yield put(signIn.success(result));
    yield put(userInfo.request(result.userEmail)); // 로그인 성공 시 userInfo 불러오기
    sessionStorage.setItem('userToken', result.token); // userToken 세션스토리지 저장
    sessionStorage.setItem('userEmail', result.userEmail); // userToken 세션스토리지 저장
  } catch (error) {
    alert('아이디나 비밀번호가 일치하지 않습니다.');
    console.log(error);
  }
}

function* signUpSaga({ payload }: ReturnType<typeof signUp.request>) {
  try {
    const result: string = yield call(SignUpAPI, payload);
    yield put(signUp.success(result));
    return result;
  } catch (error) {
    alert('사용할 수 없는 아이디 입니다.');
    console.log(error);
  }
}

function* userInfoSaga({ payload }: ReturnType<typeof userInfo.request>) {
  try {
    const result: UserInfo = yield call(UserInfoAPI, payload);
    yield put(userInfo.success(result));
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
    takeLatest(userInfo.request, userInfoSaga),
  ]);
}
