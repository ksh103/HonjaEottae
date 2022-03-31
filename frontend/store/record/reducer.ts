import { RecordState, RecordAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  CHECK_TOUR_SUCCESS,
  END_TOUR_SUCCESS,
  START_TOUR_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: RecordState = {
  tourId: 0,
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
      draft.tourId = action.payload;
    }),
});
export default record;
