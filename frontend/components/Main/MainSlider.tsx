import React from 'react';
import { Carousel } from 'antd';
import { SliderCard } from './MainPage.style';
import Link from 'next/link';

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
  return datas.map((data, i) => (
    <SliderCard key={i}>
      <img src={data.url} alt={data.title} />
      <div className="title">
        <Link href={`/course/${i}`}>
          <label>{data.title}</label>
        </Link>
      </div>
    </SliderCard>
  ));
};
const MainSlider = () => {
  return <Carousel autoplay>{showCourse()}</Carousel>;
};

export default MainSlider;
