import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
interface CourseProps {
  name: string;
}
// 코스 검색
export async function SearchCourseAPI({ name }: CourseProps) {
  const datas = await axios
    .get(`${BASE_URL}course/${name}?page=1&size=20`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    return { courseId: data.courseId, courseName: data.courseName };
  });
  return result;
}
