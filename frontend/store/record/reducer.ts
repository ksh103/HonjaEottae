import { RecordState, RecordAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  CHECK_TOUR_SUCCESS,
  END_TOUR_SUCCESS,
  MARK_STAMP_SUCCESS,
  START_TOUR_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: RecordState = {
  tourId: 0,
  stamp: [], // 현재 내가 방문한 곳들 체크
};

const record = createReducer<RecordState, RecordAction>(initialState, {
  [START_TOUR_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.tourId = action.payload;
    }),
  [END_TOUR_SUCCESS]: state =>
    produce(state, draft => {
      draft.tourId = 0;
    }),
  [CHECK_TOUR_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.tourId = action.payload.tourId;
      draft.stamp = action.payload.stamp;
    }),
  [MARK_STAMP_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.stamp.push(action.payload);
    }),
});
export default record;
