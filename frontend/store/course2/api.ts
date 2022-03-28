import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 인기 코스 가져오기
export async function GetPopularCoursesAPI(size: number) {
  const result = await axios
    .get(`${BASE_URL}course/course-hits?page=1&size=${size}`)
    .then(res => res.data.list.content);
  return result.map((data: any) => {
    return {
      courseId: data.courseId,
      courseName: data.courseName,
    };
  });
}

// 코스 조회수 올리기
export async function UpCourseHitAPI(courseId: number) {
  await axios.put(`${BASE_URL}course/course-hits`, {
    courseId: courseId,
  });
}

// 코스 성향 분석 가져오기
export async function GetCourseTypeAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/analysis/${courseId}`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result;
}

// 새로운 인연을 만날 확률 값 가져오기

// 코스 리뷰 가져오기
export async function GetCourseReviewAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/course-record/${courseId}`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result.map((data: any) => {
    return {
      recordId: data.recordId,
      recordContent: data.recordContent,
      recordRegDt: data.recordRegDt,
      // recordImage:data.recordImage,
      userId: data.user.userId,
      tourTestId: data.user.tourTestId,
      userName: data.user.userName,
      userEmail: data.user.userEmail,
    };
  });
}

// 코스 태그 가져오기
export async function GetCourseTagAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/course-tag/${courseId}`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result.map((data: any) => data.tagName);
}

// 코스 상세정보 가져오기
export async function GetCourseInfoAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/user/${courseId}`)
    .then(res => res.data);
  return result;
}

// 코스 관련 정보 가져오기
export async function GetCourseDetailAPI(courseId: number) {
  await UpCourseHitAPI(courseId);
  const info = await GetCourseInfoAPI(courseId);
  const review = await GetCourseReviewAPI(courseId);
  const type = await GetCourseTypeAPI(courseId);
  const tag = await GetCourseTagAPI(courseId);
  const result = {
    courseId: courseId,
    courseInfo: info.courseDetailList[0],
    courseTourist: info.courseTouristDetailList,
    courseReview: review,
    courseType: type,
    courseTag: tag,
  };
  return result;
}
