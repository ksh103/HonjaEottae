import { Carousel, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Content, CourseDetail, CourseImage, CourseIndex } from './Datail.style';
import DetailMap from './DetailMap';

export default function DetailCourse() {
  const [index, setIndex] = useState(4);
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );

  const courseIndex = () => {
    return courseTourist.map((data, i) => (
      <label key={i}>
        <label>{data.touristName}</label>
        <label> ▶ </label>
      </label>
    ));
  };

  const settings = {
    afterChange: (next: number) => setIndex(next),
  };

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <>
      <CourseDetail>
        <div>{courseId != 0 && <DetailMap tourist={courseTourist} />}</div>
        <div>
          <CourseImage>
            <Carousel {...settings}>
              {courseTourist.map((data, i) => (
                <div className="course-image" key={i}>
                  <img src={data.image} />
                  <div className="course-image-content">
                    <div className="name">📍 {data.touristName}</div>
                    <div>{data.touristAddress}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </CourseImage>
        </div>
      </CourseDetail>
      <CourseIndex>{courseIndex()}</CourseIndex>
      <Content>
        <h1 className="title">🚩코스 설명</h1>
        <p>{courseInfo.courseContent}</p>
      </Content>
    </>
  );
}
