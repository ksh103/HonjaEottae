import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Nav/Menu';
import { Wrapper } from '../../styles/variables';
import {
  DetailHeader,
  Title,
} from '../../components/Course/Detail/Datail.style';
import {
  LeftOutlined,
  HeartOutlined,
  HeartFilled,
  FireOutlined,
  FireFilled,
} from '@ant-design/icons';
import {
  DetailCourse,
  DetailGraph,
  DetailReview,
} from '../../components/Course/Detail';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetail } from '../../store/course2';
import { RootState } from '../../store';

const Detail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { courseInfo } = useSelector((state: RootState) => state.course2);

  useEffect(() => {
    if (id) {
      dispatch(getCourseDetail.request(+id));
    }
  }, [id]);

  return (
    <>
      <Nav />
      <Menu currentName="상세보기" />
      <Wrapper>
        <DetailHeader>
          <Title>
            <div className="back">
              <LeftOutlined />
            </div>
            <div>{courseInfo.courseName}</div>
          </Title>
          <div>
            <ul>
              <li>
                <HeartOutlined /> 저장
                {/* <HeartFilled  style={{ color: 'red' }}/> */}
              </li>
              <li>
                <FireOutlined /> 여행시작
                {/* <FireFilled  style={{ color: 'red' }}/> */}
              </li>
            </ul>
          </div>
        </DetailHeader>
        <DetailCourse />
        <DetailGraph />
        <DetailReview />
        <div>#여기 #태그 #하면 #된다</div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Detail;
