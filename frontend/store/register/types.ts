import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type RegisterAction = ActionType<typeof actions>;

export type SearchTourlist = {
  id: number;
  title: string;
  //   courseImg:string
};

export type CourseRegister = {
  courseContent: string;
  courseDays: string;
  courseDistance: string;
  courseName: string;
  touristId: {};
  userId: string;
};

export type RegisterState = {
  searchTourlists: SearchTourlist[];
};
