import React, { useCallback, useEffect } from 'react';
import { Carousel } from 'antd';
import { SliderCard } from './MainPage.style';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getPopularCourses } from '../../store/course2';

const showCourse = () => {
  const { popularCourses } = useSelector((state: RootState) => state.course2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (popularCourses.length === 0) dispatch(getPopularCourses.request(3));
  }, []);

  return (
    popularCourses.length > 0 &&
    popularCourses.map((data, i) => (
      <Link href={`/course/${i}`} key={i}>
        <SliderCard>
          {/* <img src={data.url} alt={data.courseId + ''} /> */}
          <img src="http://tong.visitkorea.or.kr/cms/resource/47/1579047_image2_1.jpg" />
          <div className="title">{data.courseName}</div>
        </SliderCard>
      </Link>
    ))
  );
};
const MainSlider = () => {
  return <Carousel autoplay>{showCourse()}</Carousel>;
};

export default MainSlider;
