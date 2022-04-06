import axios from 'axios';
import { GetPopularCoursesAPI } from '../detail/api';
import { SearchCourseResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

// 코스 검색
export async function SearchCourseAPI({ name }: SearchCourseResult) {
  const datas = await axios
    .get(`${BASE_URL}course/${name}?page=1&size=20`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    if (data.fileId == 0) {
      return {
        courseId: data.courseId,
        courseName: data.courseName,
        image: 'images/no_image.jpg',
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
  if (payload == 0) {
    const userCourses = await GetPopularCoursesAPI(20);
    const keywordCourses = await KeywordCourseAPI();
    return {
      userCourses: userCourses,
      keywordCourses: keywordCourses,
    };
  } else {
    let userCourses = await UserCourseAPI(payload);
    const keywordCourses = await KeywordCourseAPI();
    if (userCourses == 'error') {
      userCourses = await GetPopularCoursesAPI(20);
    } else {
      userCourses = userCourses.map((data: any) => {
        if (data.file_id == 0) {
          return {
            courseName: data.course_name,
            courseId: data.course_id,
            image: 'images/no_image.jpg',
          };
        } else {
          return {
            courseName: data.course_name,
            courseId: data.course_id,
            image: `${IMAGE_URL}${data.file_id}/${data.tourist_id}`,
          };
        }
      });
    }
    return {
      userCourses: userCourses,
      keywordCourses: keywordCourses,
    };
  }
  const keywordCourses = await KeywordCourseAPI();
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
          if (data.fileId != 0) {
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
          if (data.fileId != 0) {
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
          if (data.fileId != 0) {
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
    .get(`https://j6e103.p.ssafy.io:5001/data/${payload}`)
    .then(
      res => {
        // 중복 제거
        let uniqueArr: any = [];
        let uniqueId: any = [];
        res.data.forEach((element: any) => {
          if (!uniqueId.includes(element.course_id)) {
            uniqueId.push(element.course_id);
            uniqueArr.push(element);
          }
        });
        return uniqueArr;
      },
      error => {
        return 'error';
      },
    );
  return datas;
}
