import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DetailAction = ActionType<typeof actions>;

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

export type AreaCourse = {
  courseId: number;
  courseName: string;
};

export type MainData = {
  popularCourses: PopularCourse[];
  areaCourseCount: AreaCourseCount[];
};

export type CourseInfo = {
  courseName: string;
  courseContent: string;
  courseDistance: string;
  courseDays: string;
  courseHits: number;
};

export type CourseTourist = {
  touristId: number;
  touristName: string;
  touristIndex: number;
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

export type CourseTag = {
  code: number;
  tagName: string;
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
  courseTag: CourseTag[];
  coursePercentage: number;
  courseUserCount: number;
};

export type DetailState = {
  popularCourses: PopularCourse[];
  areaCourseCount: AreaCourseCount[];
  areaCourses: AreaCourse[];
  courseId: number;
  courseInfo: CourseInfo;
  courseTourist: CourseTourist[];
  courseReview: CourseReview[];
  courseType: CourseType[];
  courseTag: CourseTag[];
  coursePercentage: number;
  courseUserCount: number;
};
