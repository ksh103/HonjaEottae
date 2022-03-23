import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
interface CourseProps {
  name: string;
}
// 코스 검색
export async function SearchCourseAPI({ name }: CourseProps) {
  console.log('SearchCourseAPI ' + name);
  const result = await axios.post(`${BASE_URL}course/${name}?page=1&size=100`);
  return result;
}
