import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
// 지역별 코스 카운트
export async function GetAreaCourseCountAPI() {
  const result = await axios
    .get(`${BASE_URL}area`)
    .then(res => res.data.areaCounts);
  return result;
}

// 인기 코스 가져오기
export async function GetPopularCoursesAPI(size: number) {
  const result = await axios
    .get(`${BASE_URL}course/course-hits?page=1&size=${size}`)
    .then(res => res.data.list.content);

  return result.map((data: any) => {
    if (data.fileId === 0) {
    }
    return {
      courseId: data.courseId,
      courseName: data.courseName,
      image: IMAGE_URL + data.fileId + '/' + data.touristId,
    };
  });
}

// 메인 페이지 정보 가져오기
export async function GetMainDataAPI() {
  const area = await GetAreaCourseCountAPI();
  const popular = await GetPopularCoursesAPI(3);
  const result = {
    areaCourseCount: area,
    popularCourses: popular,
  };
  return result;
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
export async function GetCoursePercentageAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/connection/${courseId}`)
    .then(res => res.data.percentage);
  return Math.floor(result);
}

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
  console.log(result);
  const info = {
    courseInfo: result.courseDetailList[0],
    courseTourist: result.courseTouristDetailList.map((data: any) => {
      return {
        touristId: data.touristId,
        touristName: data.touristName,
        touristAddress: data.touristAddress,
        touristLat: data.touristLat,
        touristLng: data.touristLng,
        image: IMAGE_URL + data.fileId + '/' + data.touristId,
      };
    }),
  };
  return info;
}

// 코스 관련 정보 가져오기
export async function GetCourseDetailAPI(courseId: number) {
  await UpCourseHitAPI(courseId);
  const info = await GetCourseInfoAPI(courseId);
  const review = await GetCourseReviewAPI(courseId);
  const type = await GetCourseTypeAPI(courseId);
  const tag = await GetCourseTagAPI(courseId);
  const percentage = await GetCoursePercentageAPI(courseId);
  const result = {
    courseId: courseId,
    courseInfo: info.courseInfo,
    courseTourist: info.courseTourist,
    courseReview: review,
    courseType: type,
    courseTag: tag,
    coursePercentage: percentage,
  };
  return result;
}
