import { createAction, createAsyncAction } from 'typesafe-actions';
import { Tour } from './types';

export const START_TOUR_REQUEST = 'record/START_TOUR_REQUEST';
export const START_TOUR_SUCCESS = 'record/START_TOUR_SUCCESS';
export const START_TOUR_FAILURE = 'record/START_TOUR_FAILURE';

export const END_TOUR_REQUEST = 'record/END_TOUR_REQUEST';
export const END_TOUR_SUCCESS = 'record/END_TOUR_SUCCESS';
export const END_TOUR_FAILURE = 'record/END_TOUR_FAILURE';

export const startTour = createAsyncAction(
  START_TOUR_REQUEST,
  START_TOUR_SUCCESS,
  START_TOUR_FAILURE,
)<Tour, Tour, Error>();

export const endTour = createAsyncAction(
  END_TOUR_REQUEST,
  END_TOUR_SUCCESS,
  END_TOUR_FAILURE,
)<Tour, Tour, Error>();
