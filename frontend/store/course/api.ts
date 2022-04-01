import axios from 'axios';
import { GetPopularCoursesAPI } from '../course2/api';
import { SearchCourseResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

// 코스 검색
export async function SearchCourseAPI({ name }: SearchCourseResult) {
  const datas = await axios
    .get(`${BASE_URL}course/${name}?page=1&size=20`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    if (data.fileId === 0) {
      return {
        courseId: data.courseId,
        courseName: data.courseName,
        image: 'images/noimage.png',
      };
    } else {
      return {
        courseId: data.courseId,
        courseName: data.courseName,
        image: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
      };
    }
  });
  return result;
}

// 코스 데이터 받아오기
export async function RecommendCourseAPI(payload: number) {
  let userCourses = await UserCourseAPI(payload);
  if (userCourses == 'error') {
    userCourses = await GetPopularCoursesAPI(20);
  }
  // else{
  // courseName, courseId, image 객체로 넘겨주기
  // }
  const keywordCourses = await KeywordCourseAPI();
  // console.log('인기코스로 왔다', userCourses);
  // console.log('인기코스로 왔다', keywordCourses);
  return {
    userCourses: userCourses,
    keywordCourses: keywordCourses,
  };
}

export async function KeywordCourseAPI() {
  const datas = await axios.get(`${BASE_URL}course/`).then(res => res.data);
  const contents1 = datas.list1.filter((data: any) => data.fileId != 0);
  const contents2 = datas.list2.filter((data: any) => data.fileId != 0);
  const contents3 = datas.list3.filter((data: any) => data.fileId != 0);
  const result = {
    list: [
      {
        title: datas.list1Name,
        contents: contents1.map((data: any) => {
          if (data.fileId !== 0) {
            return {
              courseId: data.courseId,
              courseName: data.courseName,
              image: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
            };
          }
        }),
      },
      {
        title: datas.list2Name,
        contents: contents2.map((data: any) => {
          if (data.fileId !== 0) {
            return {
              courseId: data.courseId,
              courseName: data.courseName,
              image: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
            };
          }
        }),
      },
      {
        title: datas.list3Name,
        contents: contents3.map((data: any) => {
          if (data.fileId !== 0) {
            return {
              courseId: data.courseId,
              courseName: data.courseName,
              image: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
            };
          }
        }),
      },
    ],
  };
  return result.list;
}

export async function UserCourseAPI(payload: number) {
  const datas = await axios
    .get(`https://j6e103.p.ssafy.io:5000/data/${payload}`)
    .then(
      res => {
        return res;
      },
      error => {
        return 'error';
      },
    );
  return datas;
}
