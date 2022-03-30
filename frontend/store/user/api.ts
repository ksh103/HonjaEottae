import axios from 'axios';
import { Bookmark, SignIn, SignUp, TestResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export async function SignInAPI({ userEmail, userPassword }: SignIn) {
  const datas = await axios
    .post(`${BASE_URL}user/login`, {
      userEmail: userEmail,
      userPassword: userPassword,
    })
    .then(res => res.data);
  const result = { userEmail: datas.userEmail, token: datas.accessToken };
  return result;
}

export async function SignUpAPI({ userEmail, userName, userPassword }: SignUp) {
  const datas = await axios.post(`${BASE_URL}user/signup`, {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  });
  return datas;
}

// 사용자 코스 좋아요 추가
export async function LikeCourseAPI({ userId, courseId }: Bookmark) {
  await axios.post(`${BASE_URL}course/bookmark`, {
    courseId: courseId,
    userId: userId,
  });
}

// 사용자 코스 좋아요 삭제
export async function UnlikeCourseAPI({ userId, courseId }: Bookmark) {
  await axios.delete(`${BASE_URL}course/bookmark/${userId}/${courseId}`);
}

// 사용자가 만든 코스 가져오기
export async function UserCoursesAPI(userId: number) {
  const result = await axios
    .get(`${BASE_URL}course/custom-course/${userId}?page=1&size=10`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result.content.map((data: any) => {
    return {
      courseId: data.courseId,
      courseName: data.courseName,
      image: IMAGE_URL + data.fileId + '/' + data.touristId,
    };
  });
}

// 사용자가 좋아요한 코스 가져오기
export async function UserLikesAPI(userId: number) {
  const result = await axios
    .get(`${BASE_URL}course/bookmark-list/${userId}`)
    .then(res => res.data.list);
  if (result === null) return [];
  return result.map((data: any) => {
    return {
      courseId: data.courseId,
      courseName: data.courseName,
      image: IMAGE_URL + data.fileId + '/' + data.touristId,
    };
  });
}

// 사용자 정보 가져오기
export async function UserInfoAPI(userEmail: string) {
  const info = await axios
    .get(`${BASE_URL}user/{userEmail}?userEmail=${userEmail}`)
    .then(res => res.data);
  const courses = await UserCoursesAPI(info.userId);
  const likes = await UserLikesAPI(info.userId);
  const result = {
    userInfo: info,
    userCourses: courses,
    userLikes: likes,
  };
  return result;
}

// 여행성향테스트 결과 저장
export async function SaveTestResultAPI({ tourTestId, userId }: TestResult) {
  await axios.put(`${BASE_URL}tour-test`, {
    tourTestId: tourTestId,
    userId: userId,
  });
  return tourTestId;
}
