import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { SEARCH_LOCATION_SUCCESS, SET_SELECT_LOCATION } from './actions';
import { LocationAction, LocationState } from './types';

const initialState: LocationState = {
  searchLoactions: [],
  selectLocation: '',
};

const location = createReducer<LocationState, LocationAction>(initialState, {
  [SEARCH_LOCATION_SUCCESS]: (state, action) =>
    produce(state, draft => {
      draft.searchLoactions = action.payload;
    }),
  [SET_SELECT_LOCATION]: (state, action) =>
    produce(state, draft => {
      draft.selectLocation = action.payload;
    }),
});

export default location;
