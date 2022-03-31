import axios from 'axios';
import { Tour } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 여행 시작
export async function StartTourAPI({ courseId, userId }: Tour) {
  await axios.post(`${BASE_URL}tour-start`, {
    courseId: courseId,
    userId: userId,
  });
}

// 여행 종료
export async function EndTourAPI({ courseId, userId }: Tour) {
  await axios.put(`${BASE_URL}tour-start`, {
    courseId: courseId,
    userId: userId,
  });
}

// 여행 여부 체크
export async function CheckTourAPI(userId: number) {
  // const result = await axios
  //   .get(`${BASE_URL}tour-start/${userId}`)
  //   .then(res => console.log(res));
  // return result;
  return 5;
}

// 키워드 가져오기
export async function GetKeywordAPI() {
  const result = await axios.get(`${BASE_URL}tour-tag`).then(res => res);
  console.log(result);
  return result;
}

// 스탬프 찍기
export async function MarkStampAPI({}) {}

// 내가 방문한 장소 가져오기
export async function GetVisitedTouristAPI() {}

// 여행 후기 쓰기
export async function RegisterReviewAPI() {}
