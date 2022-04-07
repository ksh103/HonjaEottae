import { Col, Row } from 'antd';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import {
  MainGraph,
  MainMenuCard,
  MainSlider,
  MainStamp,
} from '../components/Main';
import { MenuBlock, Wrapper } from '../components/Main/Main.style';
import MainManual from '../components/Main/MainManual';
import Nav from '../components/Nav/Nav';
import { RootState } from '../store';
import { getMainData } from '../store/detail';
const menus = [
  { title: '여행코스추천', url: '/course', image: '/images/1.png' },
  { title: '내주변관광지', url: '/location', image: '/images/2.png' },
  { title: '여행성향테스트', url: '/travel', image: '/images/3.png' },
  { title: '여행기록', url: '/mypage', image: '/images/4.png' },
];

const Main: NextPage = () => {
  const { popularCourses } = useSelector((state: RootState) => state.detail);
  const { tourId } = useSelector((state: RootState) => state.record);
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
          <Row>
            {menus.map((menu, i) => (
              <Col span={12} key={i}>
                <MainMenuCard
                  index={i}
                  title={menu.title}
                  url={menu.url}
                  image={menu.image}
                />
              </Col>
            ))}
          </Row>
        </MenuBlock>
        {tourId > 0 && <MainStamp />}
        <MainGraph />
      </Wrapper>
      <Footer />
      <MainManual />
    </>
  );
};

export default Main;
