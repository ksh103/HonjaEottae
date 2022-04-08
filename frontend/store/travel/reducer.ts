import { TravelState, TravelAction } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_TEST_RESULT_SUCCESS } from './actions';
import produce from 'immer';

const initialState: TravelState = {
  typeResult: [],
};

const test = createReducer<TravelState, TravelAction>(initialState, {
  [GET_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.typeResult = action.payload;
    }),
});
export default test;
