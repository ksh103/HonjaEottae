import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { MenuBlock, TravelBlock, Wrapper } from './MainPage.style';
import MainSlider from './MainSlider';
import MainMenuCard from './MainMenuCard';
import { Row, Col } from 'antd';
import MainGraph from './MainGraph';
import MainTravel from './MainTravel';
import { useDispatch, useSelector } from 'react-redux';
import { getMainData } from '../../store/course2';
import { RootState } from '../../store';

const menus = [
  { title: '여행코스추천', url: '/course', image: '/images/1.png' },
  { title: '내주변관광지', url: '/location', image: '/images/2.png' },
  { title: '여행성향테스트', url: '/travel', image: '/images/3.png' },
  { title: '여행기록', url: '/mypage', image: '/images/4.png' },
];

export default function MainPage() {
  const { popularCourses } = useSelector((state: RootState) => state.course2);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popularCourses.length === 0) dispatch(getMainData.request(0));
  }, []);

  return (
    <>
      <Nav />
      <Wrapper>
        <MainSlider />
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
          <MainGraph />
        </TravelBlock>
      </Wrapper>
      <Footer />
    </>
  );
}
