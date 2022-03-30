import { Card } from 'antd';
import styled from 'styled-components';

interface Location {
  x: number;
  y: number;
  select: boolean;
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding-top: 90px;
`;

const SliderCard = styled.div`
  cursor: pointer;
  color: white;
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
    top: 0px;
    left: 0px;
    padding: 25px;
    font-size: 22px;
    width: 100%;
    /* color: black; */
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

const MainGraphBlock = styled.div`
  display: flex;
  @media ${props => props.theme.laptopS} {
    display: block;
  }
`;

const KoreaMap = styled.div`
  & > div {
    position: relative;
    width: 450px;
    margin: 0 auto;
  }
  img {
    width: 450px;
  }
`;
const MapAreaBox = styled.div<Location>`
  position: absolute;
  top: ${props => props.x + 'px'};
  left: ${props => props.y + 'px'};
  background-color: rgba(240, 240, 240, 0.75);
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
  padding: 5px;
  &:hover {
    background-color: white;
  }
  ${props => {
    if (props.select) {
      return {
        border: `3px solid red`,
      };
    }
  }}
`;

const AreaCourses = styled(Card)`
  width: 100%;
  min-width: 400px;
  margin: 20px;

  .area-title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  .area-name {
    display: inline-block;
    border: 1px solid lightgray;
    background-color: ${props => props.theme.colors.backgroundColor};
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
  }
  .area-course {
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
`;

export {
  MenuBlock,
  MenuCard,
  SliderCard,
  TravelBlock,
  Wrapper,
  MainGraphBlock,
  KoreaMap,
  MapAreaBox,
  AreaCourses,
};
