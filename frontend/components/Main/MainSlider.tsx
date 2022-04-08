import React from 'react';
import { SliderCard } from './Main.style';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
  const { popularCourses } = useSelector((state: RootState) => state.detail);

  const settings = {
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  };
  return (
    <>
      <Slider {...settings}>
        {popularCourses.length > 0 &&
          popularCourses.map(data => (
            <Link href={`/course/${data.courseId}`} key={data.courseId}>
              <SliderCard image={data.image}>
                <div className="title">{data.courseName}</div>
              </SliderCard>
            </Link>
          ))}
      </Slider>
    </>
  );
};

export default MainSlider;
