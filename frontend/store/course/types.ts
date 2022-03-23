import { Action, ActionType } from 'typesafe-actions';
import { searchCourse } from './actions';
const searchCourseActions = {
  searchCourse,
};

export type SearchCourseActions = ActionType<typeof searchCourseActions>;

export type content = {
  courseId: number;
  courseName: string;
};

export type list = content[];
