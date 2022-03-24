import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Course2Action = ActionType<typeof actions>;

export type PopularCourse = {
  courseId: number;
  courseName: string;
};

export type Course2State = {
  popularCourses: PopularCourse[];
};
