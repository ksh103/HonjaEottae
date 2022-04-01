import axios from 'axios';
import { MarkStamp, Tour } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

// 여행 시작
export async function StartTourAPI({ tourId, userId }: Tour) {
  await axios.post(`${BASE_URL}tour-start`, {
    courseId: tourId,
    userId: userId,
  });
  return tourId;
}

// 여행 종료
export async function EndTourAPI({ tourId, userId }: Tour) {
  await axios.put(`${BASE_URL}tour-end`, {
    courseId: tourId,
    userId: userId,
  });
}

// 키워드 가져오기
// export async function GetKeywordAPI() {
//   const result = await axios.get(`${BASE_URL}tour-tag`).then(res => res);
//   console.log(result);
//   return result;
// }

// 스탬프 찍기
export async function MarkStampAPI({
  touristIndex,
  courseId,
  userId,
}: MarkStamp) {
  await axios.put(`${BASE_URL}tour-stamp`, {
    courseDataId: touristIndex,
    courseId: courseId,
    userId: userId,
  });
  return touristIndex - 1;
}

// 내가 방문한 장소 가져오기
export async function GetVisitedTouristAPI({ userId, tourId }: Tour) {
  const result = await axios
    .get(`${BASE_URL}tour-stamp/${userId}/${tourId}`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result;
}

// 여행 여부 체크
export async function CheckTourAPI(userId: number) {
  const result = await axios
    .get(`${BASE_URL}tour-start/${userId}`)
    .then(res => res.data.courseId);
  return result;
}

// 코스 상세보기 가져오기
export async function GetCourseDetailAPI(courseId: number) {
  const result = await axios
    .get(`${BASE_URL}course-detail/user/${courseId}`)
    .then(res => res.data);
  const tourist = result.courseTouristDetailList.map((data: any, i: number) => {
    let img = '/images/no_image.jpg';
    if (data.fileId > 0) {
      img = IMAGE_URL + data.fileId + '/' + data.touristId;
    }
    return {
      touristId: data.touristId,
      touristName: data.touristName,
      touristAddress: data.touristAddress,
      touristIndex: i + 1,
      touristLat: +data.touristLat,
      touristLng: +data.touristLng,
      image: img,
      state: false,
    };
  });
  return {
    courseName: result.courseDetailList[0].courseName,
    courseTourist: tourist,
  };
} // 태그 목록 조회
export async function GetTagAPI() {
  const result = await axios
    .get(`${BASE_URL}tour-tag`)
    .then(res => res.data.list);
  return result;
}

export async function GetTourDetailAPI(userId: number) {
  const tourId = await CheckTourAPI(userId);
  if (tourId === 0)
    return { tourId: tourId, courseName: '', stamps: [], tag: [] };
  const course = await GetCourseDetailAPI(tourId);
  const visited = await GetVisitedTouristAPI({ userId, tourId });
  visited.forEach((data: any) => {
    course.courseTourist[data.courseDataId - 1].state = true;
  });
  console.log(course);
  const tag = await GetTagAPI();
  return {
    tourId: tourId,
    courseName: course.courseName,
    stamps: course.courseTourist,
    tag: tag,
  };
}

// 후기 태그 등록
export async function RegisterTagAPI() {}

// 여행 후기 쓰기
export async function RegisterReviewAPI() {}
