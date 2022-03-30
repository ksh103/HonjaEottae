import { TourState, TourAction } from './types';
import { createReducer } from 'typesafe-actions';
import { START_TOUR_SUCCESS } from './actions';
import produce from 'immer';

const initialState: TourState = {
  tour: 0,
};

const tour = createReducer<TourState, TourAction>(initialState, {
  [START_TOUR_SUCCESS]: (state, action) => produce(state, draft => {}),
});
export default tour;
