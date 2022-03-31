import { Carousel, Col, Row } from 'antd';
import slider from 'antd/lib/slider';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TourList from '../../Register/TourList';
import { Content, CourseImage, CourseIndex } from './Datail.style';
import DetailMap from './DetailMap';

export default function DetailCourse() {
  const [index, setIndex] = useState(4);
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );

  // const clickTourist = (e: any) => {
  //   // console.log(e);
  // };

  const courseIndex = () => {
    return courseTourist.map(data => (
      <>
        <label>{data.touristName}</label>
        <label> ▶ </label>
      </>
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
      <div>
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
      </div>
      <CourseIndex>{courseIndex()}</CourseIndex>
      <Content>
        <h1 className="title">🚩코스 설명</h1>
        <p>{courseInfo.courseContent}</p>
      </Content>
    </>
  );
}
