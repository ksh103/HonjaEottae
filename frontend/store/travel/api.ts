import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 여행성향테스트 결과 가져오기
export async function GetTestResultAPI() {
  const result = await axios
    .get(`${BASE_URL}tour-test`)
    .then(res => res.data.list);
  return result;
}

// 여행성향테스트 결과 추천 코스
export async function GetRecommendCourseAPI() {
  const result = await axios.get(`${BASE_URL}tour-test/1/2`);
  return result;
}
