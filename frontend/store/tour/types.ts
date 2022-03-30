import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TourAction = ActionType<typeof actions>;

export type Tour = {
  courseId: number;
  userId: number;
};

export type TourState = {
  tour: number;
};
