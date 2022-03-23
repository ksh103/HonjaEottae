import { TravelState, TravelAction } from './types';
import { createReducer } from 'typesafe-actions';
import {
  GET_TEST_RESULT,
  GET_TEST_RESULT_REQUEST,
  GET_TEST_RESULT_SUCCESS,
} from './actions';
import produce from 'immer';

const initialState: TravelState = {
  typeRank: [],
};

const travel = createReducer<TravelState, TravelAction>(initialState, {
  [GET_TEST_RESULT_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.typeRank = action.payload;
    }),
  [GET_TEST_RESULT_REQUEST]: (state, action) =>
    produce(state, draft => {
      console.log(action.payload);
    }),
  //   [GET_TEST_RESULT]: (state, action) =>
  //     produce(state, draft => {
  //       draft.typeRank = action.payload;
  //     }),
});

export default travel;
