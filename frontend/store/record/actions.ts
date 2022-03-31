import { createAsyncAction } from 'typesafe-actions';
import { MarkStamp, RecordState, Stamp, Tour } from './types';

// 여행 시작
export const START_TOUR_REQUEST = 'record/START_TOUR_REQUEST';
export const START_TOUR_SUCCESS = 'record/START_TOUR_SUCCESS';
export const START_TOUR_FAILURE = 'record/START_TOUR_FAILURE';
// 여행 종료
export const END_TOUR_REQUEST = 'record/END_TOUR_REQUEST';
export const END_TOUR_SUCCESS = 'record/END_TOUR_SUCCESS';
export const END_TOUR_FAILURE = 'record/END_TOUR_FAILURE';
// 여행 여부 체크
export const CHECK_TOUR_REQUEST = 'record/CHECK_TOUR_REQUEST';
export const CHECK_TOUR_SUCCESS = 'record/CHECK_TOUR_SUCCESS';
export const CHECK_TOUR_FAILURE = 'record/CHECK_TOUR_FAILURE';
// 스탬프 찍기
export const MARK_STAMP_REQUEST = 'record/MARK_STAMP_REQUEST';
export const MARK_STAMP_SUCCESS = 'record/MARK_STAMP_SUCCESS';
export const MARK_STAMP_FAILURE = 'record/MARK_STAMP_FAILURE';

export const startTour = createAsyncAction(
  START_TOUR_REQUEST,
  START_TOUR_SUCCESS,
  START_TOUR_FAILURE,
)<Tour, number, Error>();

export const endTour = createAsyncAction(
  END_TOUR_REQUEST,
  END_TOUR_SUCCESS,
  END_TOUR_FAILURE,
)<Tour, number, Error>();

export const checkTour = createAsyncAction(
  CHECK_TOUR_REQUEST,
  CHECK_TOUR_SUCCESS,
  CHECK_TOUR_FAILURE,
)<number, RecordState, Error>();

export const markStamp = createAsyncAction(
  MARK_STAMP_REQUEST,
  MARK_STAMP_SUCCESS,
  MARK_STAMP_FAILURE,
)<MarkStamp, Stamp, Error>();
