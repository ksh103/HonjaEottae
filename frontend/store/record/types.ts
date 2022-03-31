import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type RecordAction = ActionType<typeof actions>;

export type Tour = {
  courseId: number;
  userId: number;
};

export type RecordState = {
  tourId: number;
};
