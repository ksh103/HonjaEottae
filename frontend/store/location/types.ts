import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LocationAction = ActionType<typeof actions>;

export type SearchLocationResult = {
  lat: number;
  lng: number;
};

export type SearchLocation = {
  touristId: number;
  touristName: string;
  touristAddress: string;
  touristLat: number;
  touristLng: number;
  touristSummary: string;
  image: string[];
};

export type LocationState = {
  searchLoactions: SearchLocation[];
  selectLocation: string;
};
