import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TravelAction = ActionType<typeof actions>;

export type TravelTestResult = {
  userId: number;
  type: number;
};

// export type Travel
export type TravelState = {
  typeResult: Array<number>;
  myType: number;
};
