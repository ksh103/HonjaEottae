import axios from 'axios';
import { SearchCourseResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// 코스 검색
export async function SearchCourseAPI({ name }: SearchCourseResult) {
  const datas = await axios
    .get(`${BASE_URL}course/${name}?page=1&size=20`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    return { courseId: data.courseId, courseName: data.courseName };
  });
  return result;
}
