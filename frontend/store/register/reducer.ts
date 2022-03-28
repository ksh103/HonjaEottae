import { createReducer } from 'typesafe-actions';
import { RegisterAction, RegisterState } from './types';
import { SEARCH_TOURLIST_SUCCESS } from './actions';
import produce from 'immer';

const initialState: RegisterState = {
  searchTourlists: [],
};

const register = createReducer<RegisterState, RegisterAction>(initialState, {
  [SEARCH_TOURLIST_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.searchTourlists = action.payload;
    }),
});

export default register;
