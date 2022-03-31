import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type RecordAction = ActionType<typeof actions>;

export type Tour = {
  courseId: number;
  userId: number;
};

export type MarkStamp = {
  touristIndex: number;
  courseId: number;
  touristName: string;
  userId: number;
};

export type Stamp = {
  touristName: string;
  touristIndex: number;
};

export type RecordState = {
  tourId: number;
  stamp: Stamp[];
};
