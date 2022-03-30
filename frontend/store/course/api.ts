import axios from 'axios';
import { SearchCourseResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

// 코스 검색
export async function SearchCourseAPI({ name }: SearchCourseResult) {
  const datas = await axios
    .get(`${BASE_URL}course/${name}?page=1&size=20`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    console.log('d', data);
    if (data.fileId === 0) {
      return {
        courseId: data.courseId,
        courseName: data.courseName,
        img: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/10/11/7d43baac-4f90-4ed8-9553-9cf488b2eff9.jpg',
      };
    } else {
      return {
        courseId: data.courseId,
        courseName: data.courseName,
        img: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
      };
    }
  });
  return result;
}
