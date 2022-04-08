import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchLocation } from './actions';
import { SearchLocationAPI } from './api';
import { SearchLocation } from './types';

function* searchLocationSaga({
  payload: { lat, lng },
}: ReturnType<typeof searchLocation.request>) {
  try {
    const result: SearchLocation[] = yield call(SearchLocationAPI, {
      lat,
      lng,
    });
    yield put(searchLocation.success(result));
  } catch (error) {
    console.error(error);
  }
}

export function* locationSaga() {
  yield all([takeLatest(searchLocation.request, searchLocationSaga)]);
}
