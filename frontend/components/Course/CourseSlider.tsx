import React from 'react';
import Slider from 'react-slick';
import { CourseSliderBlock } from './Course.style';
import CourseForm from './CourseForm';
interface CourseListProps {
  data: {
    courseId: number;
    courseName: string;
    image: string;
  }[];
}
export default function CourseSlider(data: CourseListProps) {
  const datas = data.data;
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CourseSliderBlock>
      <Slider {...settings}>
        {datas.map((data, idx) => (
          <CourseForm
            courseName={data.courseName}
            courseId={data.courseId}
            imgSrc={data.image}
            key={idx}
          />
        ))}
      </Slider>
    </CourseSliderBlock>
  );
}
