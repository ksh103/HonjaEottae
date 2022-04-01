import { RecordState, RecordAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  CANCEL_TOUR_SUCCESS,
  END_TOUR_SUCCESS,
  GET_TAG_SUCCESS,
  GET_TOUR_DETAIL_SUCCESS,
  MARK_STAMP_SUCCESS,
  START_TOUR_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: RecordState = {
  tourId: 0,
  courseName: '',
  stamps: [],
  tag: [],
};

const record = createReducer<RecordState, RecordAction>(initialState, {
  [GET_TOUR_DETAIL_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.tourId = action.payload.tourId;
      draft.courseName = action.payload.courseName;
      draft.stamps = action.payload.stamps;
      draft.tag = action.payload.tag;
    }),
  [START_TOUR_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.tourId = action.payload;
    }),
  [END_TOUR_SUCCESS]: state =>
    produce(state, draft => {
      draft.tourId = 0;
    }),
  [CANCEL_TOUR_SUCCESS]: state =>
    produce(state, draft => {
      draft.tourId = 0;
      draft.courseName = '';
      draft.stamps = [];
    }),
  [MARK_STAMP_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.stamps[action.payload].state = true;
    }),
});
export default record;
