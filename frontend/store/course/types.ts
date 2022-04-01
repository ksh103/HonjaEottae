import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CourseAction = ActionType<typeof actions>;

export type SearchCourseResult = {
  name: string;
};

export type SearchCourse = {
  courseId: number;
  courseName: string;
  image: string;
};

export type userCourses = {
  courseId: number;
  courseName: string;
  image: string;
};

export type KeywordCourse = {
  list: [];
};

export type CourseDetail = {
  keywordCourses: [];
  userCourses: userCourses[];
};

export type CourseState = {
  searchCourses: SearchCourse[];
  searchKeyword: string;
  keywordCourses: [];
  userCourses: userCourses[];
};
