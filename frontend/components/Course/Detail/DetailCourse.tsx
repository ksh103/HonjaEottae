import { Carousel, Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TourList from '../../Register/TourList';
import { Content, CourseImage, CourseIndex } from './Datail.style';
import DetailMap from './DetailMap';

export default function DetailCourse() {
  const { courseId, courseInfo, courseTourist } = useSelector(
    (state: RootState) => state.course2,
  );

  const courseIndex = () => {
    const course: any = [];
    courseTourist.forEach(data => course.push(data.touristName));
    return course.join(' ▶ ');
  };

  return (
    <>
      <div>
        <Row>
          <Col span={12}>
            {courseId != 0 && <DetailMap tourist={courseTourist} />}
          </Col>
          <Col span={12}>
            {/* 코스 정보 */}
            {/* <img src="/images/course.JPG" alt="course" width="100%" /> */}
            <CourseImage>
              {/* <Carousel dotPosition="top"> */}
              <Carousel>
                {courseTourist.map(data => (
                  <div className="course-image">
                    <img src="http://tong.visitkorea.or.kr/cms/resource/47/1579047_image2_1.jpg" />
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
