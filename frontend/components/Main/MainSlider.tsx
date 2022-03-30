import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { SliderCard } from './MainPage.style';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const showCourse = () => {
  const { popularCourses } = useSelector((state: RootState) => state.course2);

  return (
    popularCourses.length > 0 &&
    popularCourses.map(data => (
      <Link href={`/course/${data.courseId}`} key={data.courseId}>
        <SliderCard>
          <img src={data.image} alt={data.courseId + ''} />
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
