import { RecordState, RecordAction } from './types';
import { createReducer } from 'typesafe-actions';
import { START_TOUR_SUCCESS } from './actions';
import produce from 'immer';

const initialState: RecordState = {
  record: 0,
};

const record = createReducer<RecordState, RecordAction>(initialState, {
  [START_TOUR_SUCCESS]: (state, action) => produce(state, draft => {}),
});
export default record;
