import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TravelAction = ActionType<typeof actions>;

// export type Travel
export type TravelState = {
  typeRank: number[];
};
