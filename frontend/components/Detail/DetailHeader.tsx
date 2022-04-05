import React, { useEffect, useState } from 'react';
import { Header } from './Datail.style';
import {
  LeftOutlined,
  HeartOutlined,
  HeartFilled,
  FireOutlined,
  FireFilled,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { likeCourse, unlikeCourse } from '../../store/user';
import { startTour } from '../../store/record';
import Router from 'next/router';
export default function DetailHeader() {
  const dispatch = useDispatch();
  const { courseId, courseInfo, courseTourist, courseReview } = useSelector(
    (state: RootState) => state.detail,
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
    dispatch(
      unlikeCourse.request({
        courseId: courseId,
        courseName: courseInfo.courseName,
        userId: userInfo.userId,
        image: courseTourist[0].image,
      }),
    );
  };
  const StartTour = () => {
    if (tourId === 0) {
      dispatch(
        startTour.request({ userId: userInfo.userId, tourId: courseId }),
      );
    } else {
      alert('여행중인 코스가 있습니다.');
    }
  };
  const ProcessTour = () => {
    Router.push('/record');
  };

  const showTourState = () => {
    if (courseReview.find(a => a.userId === userInfo.userId)) {
      return (
        <li className="end">
          <FireFilled style={{ color: 'gray' }} /> 여행종료
        </li>
      );
    } else if (tourId === courseId) {
      return (
        <li onClick={ProcessTour}>
          <FireFilled style={{ color: 'red' }} /> 여행중
        </li>
      );
    }
    return (
      <li onClick={StartTour}>
        <FireOutlined /> 여행시작
      </li>
    );
  };

  return (
    <Header>
      <div className="detail-title">
        <div className="back" onClick={() => Router.back()}>
          <LeftOutlined />
        </div>
        {courseInfo.courseName}
      </div>
      <div className="detail-state">
        {isLogin && (
          <ul>
            {courseReview && showTourState()}
            {like ? (
              <li onClick={UnlikeCourse}>
                <HeartFilled style={{ color: 'red' }} /> 취소
              </li>
            ) : (
              <li onClick={LikeCourse}>
                <HeartOutlined /> 저장
              </li>
            )}
          </ul>
        )}
      </div>
    </Header>
  );
}
