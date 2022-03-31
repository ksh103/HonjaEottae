import React, { useEffect, useState } from 'react';
import { Header, Title } from './Datail.style';
import {
  LeftOutlined,
  HeartOutlined,
  HeartFilled,
  FireOutlined,
  FireFilled,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { likeCourse, unlikeCourse } from '../../../store/user';
import { startTour } from '../../../store/record';
export default function DetailHeader() {
  const dispatch = useDispatch();
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );
  const { isLogin, userLikes, userInfo } = useSelector(
    (state: RootState) => state.user,
  );
  const { tourId } = useSelector((state: RootState) => state.record);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (courseId && userLikes.length > 0) {
      const result = userLikes.find(data => data.courseId === courseId);
      if (result) {
        setLike(true);
      } else {
        setLike(false);
      }
    } else {
      setLike(false);
    }
  }, [courseId, userLikes]);

  const LikeCourse = () => {
    console.log('추가할거야!!');
    dispatch(
      likeCourse.request({
        courseId: courseId,
        courseName: courseInfo.courseName,
        userId: userInfo.userId,
        image: courseTourist[0].image,
      }),
    );
  };
  const UnlikeCourse = () => {
    console.log('취소할거야!!');
    dispatch(
      unlikeCourse.request({
        courseId: courseId,
        courseName: courseInfo.courseName,
        userId: userInfo.userId,
        image: courseTourist[0].image,
      }),
    );
  };
  const StartCourse = () => {
    if (tourId === 0) {
      console.log('시작할거야!!');
      dispatch(
        startTour.request({ userId: userInfo.userId, courseId: courseId }),
      );
    } else {
      alert('여행중인 코스가 있습니다.');
    }
  };
  const EndCourse = () => {
    console.log('종료할거야!!');
    alert('후기를 작성하시겠습니까?');
    // 종료는 후기 작성하고 죵료할수있게 처리
    // href('/record');
  };

  return (
    <Header>
      <Title>
        <div className="back">
          <LeftOutlined />
        </div>
        <div>{courseInfo.courseName}</div>
      </Title>
      {isLogin && (
        <div>
          <ul>
            {like ? (
              <li onClick={UnlikeCourse}>
                <HeartFilled style={{ color: 'red' }} /> 취소
              </li>
            ) : (
              <li onClick={LikeCourse}>
                <HeartOutlined /> 저장
              </li>
            )}
            {tourId === courseId ? (
              <li onClick={EndCourse}>
                <FireFilled style={{ color: 'red' }} /> 여행종료
              </li>
            ) : (
              <li onClick={StartCourse}>
                <FireOutlined /> 여행시작
              </li>
            )}
          </ul>
        </div>
      )}
    </Header>
  );
}
