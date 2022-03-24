import { createAction, createAsyncAction } from 'typesafe-actions';
import { SearchLocation, SearchLocationResult } from './types';

export const SEARCH_LOCATION_REQUEST = 'location/SEARCH_LOCATION_REQUEST';
export const SEARCH_LOCATION_SUCCESS = 'location/SEARCH_LOCATION_SUCCESS';
export const SEARCH_LOCATION_FAILURE = 'location/SEARCH_LOCATION_FAILURE';

export const SET_SELECT_LOCATION = 'location/SET_SELECT_LOCATION';

export const searchLocation = createAsyncAction(
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE,
)<SearchLocationResult, SearchLocation[], Error>();

export const selectLocation = createAction(SET_SELECT_LOCATION)<string>();
