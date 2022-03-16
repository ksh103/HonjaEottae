import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Wrapper } from '../../styles/variables';
import {
  MenuBlock,
  MenuCard,
  SliderBlock,
  TravelBlock,
} from './MainPage.style';
import MainSlider from './MainSlider';
import MainMenuCard from './MainMenuCard';
import { Row, Col } from 'antd';
import MainTravel from './MainTravel';
import MainGraph from './MainGraph';

const menus = [
  { title: '여행코스추천', url: '/course', image: '/images/1.png' },
  { title: '내주변관광지', url: '/course', image: '/images/2.png' },
  { title: '여행성향테스트', url: '/course', image: '' },
  { title: '여행기록', url: '/course', image: '' },
];

export default function MainPage() {
  return (
    <>
      <Nav />
      <Wrapper>
        <SliderBlock>
          <MainSlider />
        </SliderBlock>
        <MenuBlock>
          <Row gutter={[20, 20]}>
            {menus.map((menu, i) => (
              <Col span={12} key={i}>
                <MainMenuCard
                  title={menu.title}
                  url={menu.url}
                  image={menu.image}
                />
              </Col>
            ))}
          </Row>
        </MenuBlock>
        <TravelBlock>
          <h1>현재 여행</h1>
          <MainTravel />
        </TravelBlock>
        <TravelBlock>
          <h1>지역별 분석</h1>
          <MainGraph />
        </TravelBlock>
      </Wrapper>
      <Footer />
    </>
  );
}
