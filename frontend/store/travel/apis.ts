import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 여행 성향 테스트 결과 가져오기
export function getTestResultAPI() {
  const result = axios
    .get(`${BASE_URL}tour-test`)
    .then(res => console.log(res));
  return result;
}

// 여행 성향 테스트 결과 저장(회원)
// export async function SaveTravelTestResultAPI({ tourTestId, userId }:) {
//   const result = await axios.put(`${BASE_URL}tour-test`, {tourTestId:tourTestId,userId:userId});
//   return result;
// }

// 여행 성향 테스트 결과 추천 코스
export async function GetRecommendCourseAPI() {
  const result = await axios.get(`${BASE_URL}tour-test/1/2`);
  return result;
}
