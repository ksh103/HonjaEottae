import { createAsyncAction } from 'typesafe-actions';
import { MarkStamp, RecordState, Review, Stamp, TagCode, Tour } from './types';

// 여행 정보 가져오기
export const GET_TOUR_DETAIL_REQUEST = 'record/GET_TOUR_DETAIL_REQUEST';
export const GET_TOUR_DETAIL_SUCCESS = 'record/GET_TOUR_DETAIL_SUCCESS';
export const GET_TOUR_DETAIL_FAILURE = 'record/GET_TOUR_DETAIL_FAILURE';
// 여행 시작
export const START_TOUR_REQUEST = 'record/START_TOUR_REQUEST';
export const START_TOUR_SUCCESS = 'record/START_TOUR_SUCCESS';
export const START_TOUR_FAILURE = 'record/START_TOUR_FAILURE';
// 여행 종료
export const END_TOUR_REQUEST = 'record/END_TOUR_REQUEST';
export const END_TOUR_SUCCESS = 'record/END_TOUR_SUCCESS';
export const END_TOUR_FAILURE = 'record/END_TOUR_FAILURE';
// 여행 취소
export const CANCEL_TOUR_REQUEST = 'record/CANCEL_TOUR_REQUEST';
export const CANCEL_TOUR_SUCCESS = 'record/CANCEL_TOUR_SUCCESS';
export const CANCEL_TOUR_FAILURE = 'record/CANCEL_TOUR_FAILURE';
// 스탬프 찍기
export const MARK_STAMP_REQUEST = 'record/MARK_STAMP_REQUEST';
export const MARK_STAMP_SUCCESS = 'record/MARK_STAMP_SUCCESS';
export const MARK_STAMP_FAILURE = 'record/MARK_STAMP_FAILURE';
// 태그 가져오기
export const GET_TAG_REQUEST = 'course2/GET_TAG_REQUEST';
export const GET_TAG_SUCCESS = 'course2/GET_TAG_SUCCESS';
export const GET_TAG_FAILURE = 'course2/GET_TAG_FAILURE';

export const getTourDetail = createAsyncAction(
  GET_TOUR_DETAIL_REQUEST,
  GET_TOUR_DETAIL_SUCCESS,
  GET_TOUR_DETAIL_FAILURE,
)<number, RecordState, Error>();

export const startTour = createAsyncAction(
  START_TOUR_REQUEST,
  START_TOUR_SUCCESS,
  START_TOUR_FAILURE,
)<Tour, number, Error>();

export const endTour = createAsyncAction(
  END_TOUR_REQUEST,
  END_TOUR_SUCCESS,
  END_TOUR_FAILURE,
)<Review, number, Error>();

export const cancelTour = createAsyncAction(
  CANCEL_TOUR_REQUEST,
  CANCEL_TOUR_SUCCESS,
  CANCEL_TOUR_FAILURE,
)<Tour, number, Error>();

export const markStamp = createAsyncAction(
  MARK_STAMP_REQUEST,
  MARK_STAMP_SUCCESS,
  MARK_STAMP_FAILURE,
)<MarkStamp, number, Error>();

export const getTag = createAsyncAction(
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  GET_TAG_FAILURE,
)<string, TagCode[], Error>();
