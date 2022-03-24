import React, { useCallback, useEffect } from 'react';
import { Carousel } from 'antd';
import { SliderCard } from './MainPage.style';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getPopularCourses } from '../../store/course2';

const datas = [
  {
    title: '바다와 바람, 자연체험여행의 보물창고',
    url: 'http://tong.visitkorea.or.kr/cms/resource/07/1230307_image2_1.jpg',
  },
  {
    title: '호국돈대길의 풍광 좋은 바다를 걸어보자',
    url: 'http://tong.visitkorea.or.kr/cms/resource/47/1579047_image2_1.jpg',
  },
  {
    title: '온몸으로 즐기는 대구 2박 3일 코스 여행!',
    url: 'http://tong.visitkorea.or.kr/cms/resource/88/2681588_image2_1.jpg',
  },
];

const showCourse = () => {
  const { popularCourses } = useSelector((state: RootState) => state.course2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (popularCourses.length === 0) dispatch(getPopularCourses.request(3));
  }, []);

  return (
    popularCourses.length > 0 &&
    popularCourses.map((data, i) => (
      <Link href={`/course/${i}`}>
        <SliderCard key={i}>
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
