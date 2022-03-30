import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Course2Action = ActionType<typeof actions>;

export type PopularCourse = {
  courseId: number;
  courseName: string;
  image: string;
};

export type AreaCourseCount = {
  areaId: number;
  areaName: string;
  areaX: number;
  areaY: number;
  areaCount: number;
};

export type MainData = {
  popularCourses: PopularCourse[];
  areaCourseCount: AreaCourseCount[];
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
  touristId: number;
  touristName: string;
  touristAddress: string;
  touristLat: string;
  touristLng: string;
  image: string;
};

export type CourseReview = {
  recordId: number;
  recordContent: string;
  recordRegDt: string;
  image: string;
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
  coursePercentage: number;
};

export type Course2State = {
  popularCourses: PopularCourse[];
  areaCourseCount: AreaCourseCount[];
  courseId: number;
  courseInfo: CourseInfo;
  courseTourist: CourseTourist[];
  courseReview: CourseReview[];
  courseType: CourseType[];
  courseTag: string[];
  coursePercentage: number;
};
