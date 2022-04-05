import { Carousel, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
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
    (state: RootState) => state.course2,
  );

  const courseIndex = () => {
    return courseTourist.map((data, i) => {
      if (i === 0) return data.touristName;
      return ' ▶ ' + data.touristName;
    });
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
        <Row>
          <Col span={12}>
            {courseId != 0 && <DetailMap tourist={courseTourist} />}
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>
      </CourseDetail>
      <CourseIndex>{courseIndex()}</CourseIndex>
      <CourseContent>
        <div className="title">🚩 코스 설명</div>
        <p>{courseInfo.courseContent}</p>
      </CourseContent>
    </>
  );
}
