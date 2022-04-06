import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { RootState } from '../../store';
import {
  CourseContent,
  CourseDetail,
  CourseImage,
  CourseIndex,
} from './Datail.style';
import DetailMap from './DetailMap';

export default function DetailCourse() {
  const [index, setIndex] = useState(4);
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.detail,
  );

  const courseIndex = () => {
    return courseTourist.map((data, i) => {
      if (i === 0) return data.touristName;
      return ' ▶ ' + data.touristName;
    });
  };

  const settings = {
    fade: true,
    dots: true,
    afterChange: (next: number) => setIndex(next),
  };
  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <>
      <CourseDetail>
        {courseId != 0 && <DetailMap tourist={courseTourist} />}
        <CourseImage>
          <Slider {...settings}>
            {courseTourist.map((data, i) => (
              <div className="course-image" key={i}>
                <img src={data.image} />
                <div className="course-image-content">
                  <div className="name">📍 {data.touristName}</div>
                  <div>{data.touristAddress}</div>
                </div>
              </div>
            ))}
          </Slider>
        </CourseImage>
      </CourseDetail>
      <CourseIndex>{courseIndex()}</CourseIndex>
      <CourseContent>
        <div className="title">🚩 코스 설명</div>
        <p>{courseInfo.courseContent}</p>
      </CourseContent>
    </>
  );
}
