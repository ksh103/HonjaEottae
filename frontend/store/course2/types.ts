import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Course2Action = ActionType<typeof actions>;

export type PopularCourse = {
  courseId: number;
  courseName: string;
};

export type CourseInfo = {
  // courseId: number;
  courseName: string;
  courseContent: string;
  courseDistance: string;
  courseDays: string;
  courseHits: number;
};

export type CourseTourist = {
  // touristId: number;
  touristName: string;
  touristAddress: string;
  touristLat: string;
  touristLng: string;
  // touristImage: string;
};

export type CourseReview = {
  recordId: number;
  recordContent: string;
  recordRegDt: string;
  // recordImage: string;
  userId: number;
  tourTestId: number;
  userName: string;
  userEmail: string;
};

export type CourseType = {
  tourTestCount: number;
  tourTestId: number;
  tourTestName: string;
};

export type CourseDetail = {
  courseId: number;
  courseInfo: CourseInfo;
  courseTourist: CourseTourist[];
  courseReview: CourseReview[];
  courseType: CourseType[];
  courseTag: string[];
};

export type Course2State = {
  popularCourses: PopularCourse[];
  courseId: number;
  courseInfo: CourseInfo;
  courseTourist: CourseTourist[];
  courseReview: CourseReview[];
  courseType: CourseType[];
  courseTag: string[];
};
