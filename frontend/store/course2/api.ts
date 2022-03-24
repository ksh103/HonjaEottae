import axios from 'axios';
import { data } from '../../components/Charts/MypageData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 인기 코스들 가져오기
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
