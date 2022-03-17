import { Card } from 'antd';
import styled from 'styled-components';

const SliderCard = styled.div`
  background-color: lightgoldenrodyellow;
  height: 200px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .title {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 20px;
    width: 400px;
    label {
      color: white;
      cursor: pointer;
    }
  }
`;

const MenuBlock = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const MenuCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s;
    }
  }
`;

const TravelBlock = styled.div`
  padding: 30px 0;
`;

export { MenuBlock, MenuCard, SliderCard, TravelBlock };
