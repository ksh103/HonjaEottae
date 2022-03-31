import axios from 'axios';
import { MarkStamp, Tour } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 여행 시작
export async function StartTourAPI({ courseId, userId }: Tour) {
  await axios.post(`${BASE_URL}tour-start`, {
    courseId: courseId,
    userId: userId,
  });
  return courseId;
}

// 여행 종료
export async function EndTourAPI({ courseId, userId }: Tour) {
  await axios.put(`${BASE_URL}tour-start`, {
    courseId: courseId,
    userId: userId,
  });
}

// 여행 취소
export async function CancelTourAPI({ courseId, userId }: Tour) {
  await axios.put(`${BASE_URL}tour-start`, {
    courseId: courseId,
    userId: userId,
  });
}

// 키워드 가져오기
export async function GetKeywordAPI() {
  const result = await axios.get(`${BASE_URL}tour-tag`).then(res => res);
  console.log(result);
  return result;
}

// 스탬프 찍기
export async function MarkStampAPI({
  touristIndex,
  courseId,
  touristName,
  userId,
}: MarkStamp) {
  await axios.put(`${BASE_URL}tour-stamp`, {
    courseDataId: touristIndex,
    courseId: courseId,
    userId: userId,
  });
  return { touristName: touristName, touristIndex: touristIndex };
}

// 내가 방문한 장소 가져오기
export async function GetVisitedTouristAPI({ userId, courseId }: Tour) {
  const result = await axios
    .get(`${BASE_URL}tour-stamp/${userId}/${courseId}`)
    .then(res => res.data.list);
  console.log(result);
  if (result === null) return [];

  return result;
}

// 여행 여부 체크
export async function CheckTourAPI(userId: number) {
  // const tourId = await axios
  //   .get(`${BASE_URL}tour-start/${userId}`)
  //   .then(res => res.data.courseId);
  const visited = await GetVisitedTouristAPI({
    userId: userId,
    courseId: 1040,
  });
  const result = {
    tourId: 1040,
    stamp: visited,
  };
  return result;
}

// 태그 목록 조회

// 후기 태그 등록

// 여행 후기 쓰기
export async function RegisterReviewAPI() {}
