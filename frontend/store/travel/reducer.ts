import { TravelState, TravelAction } from './types';
import { createReducer } from 'typesafe-actions';
import { GET_TEST_RESULT_SUCCESS, SAVE_TEST_RESULT_SUCCESS } from './actions';
import produce from 'immer';

const initialState: TravelState = {
  typeResult: [],
  myType: 7,
};

const travel = createReducer<TravelState, TravelAction>(initialState, {
  [GET_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.typeResult = action.payload;
    }),
  [SAVE_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.myType = action.payload;
    }),
});

export default travel;
