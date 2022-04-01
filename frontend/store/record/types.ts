import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type RecordAction = ActionType<typeof actions>;

export type Tour = {
  tourId: number;
  userId: number;
};

export type MarkStamp = {
  touristIndex: number;
  courseId: number;
  userId: number;
};

export type Stamp = {
  touristId: number;
  touristName: string;
  touristIndex: number;
  touristAddress: string;
  touristLat: number;
  touristLng: number;
  image: string;
  state: boolean;
};

export type Tag = {
  code: number;
  tagId: number;
  tagName: string;
};

export type TagCode = {
  code: number;
  codeName: string;
  tag: Tag[];
};

export type Review = {
  tag: number[][];
  tourId: number;
  userId: number;
  recordContent?: string;
  image?: File;
};

export type RecordState = {
  tourId: number;
  courseName: string;
  stamps: Stamp[];
  tag: TagCode[];
};
