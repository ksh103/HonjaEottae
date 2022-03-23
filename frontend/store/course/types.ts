import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CourseAction = ActionType<typeof actions>;

export type SearchCourse = {
  courseId: number;
  courseName: string;
};

export type CourseState = {
  searchCourses: SearchCourse[];
};
