import { TravelState, TravelAction } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_TEST_RESULT_SUCCESS } from './actions';
import produce from 'immer';

const initialState: TravelState = {
  typeRank: [],
};

const travel = createReducer<TravelState, TravelAction>(initialState, {
  [GET_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.typeRank = action.payload;
    }),
});

export default travel;
