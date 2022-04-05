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

const StampBlock = styled.div`
  cursor: pointer;
  position: relative;
  .stamp-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .stamp-content {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    overflow-y: auto;
  }
  .stamp-line {
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: lightgray;
    top: 140px;
    left: 0px;
    right: 0px;
  }
  .stamp-name {
    width: 140px;
    text-align: center;
    margin-top: 20px;
    font-size: 17px;
  }

  @media ${props => props.theme.tablet} {
    .stamp-line {
      height: 2px;
      top: 110px;
    }
    .stamp-name {
      width: 100px;
      font-size: 15px;
    }
  }
`;

const StampCard = styled.div<{ $state: boolean }>`
  padding: 0 40px;
  position: relative;
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid lightgray;
    mix-blend-mode: ${props => (props.$state ? 'luminosity' : 'normal')};
  }
  .stamp {
    position: absolute;
    left: 40px;
    border: 3px solid ${props => props.theme.colors.pointColor};
    mix-blend-mode: normal;
    opacity: ${props => (props.$state ? 1 : 0)};
  }
  .stamp-index {
    display: inline-block;
    background-color: ${props =>
      props.$state ? 'gray' : props.theme.colors.pointColor};
    color: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    line-height: 22px;
    font-weight: bold;
    font-size: 14px;
  }
  @media ${props => props.theme.tablet} {
    padding: 0 20px;
    img {
      width: 100px;
      height: 100px;
    }
    .stamp {
      left: 20px;
      border: 3px solid ${props => props.theme.colors.pointColor};
    }
  }
`;

const SliderCard = styled.div`
  cursor: pointer;
  color: white;
  height: 200px;
  width: 100%;
  position: relative;
  background-color: black;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    &:hover {
      opacity: 0.5;
    }
  }
  .title {
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: 50px;
    font-size: 22px;
    font-family: 'Jalnan';
    width: 100%;
    text-align: center;
    text-shadow: 4px 4px 8px black;
  }
  @media ${props => props.theme.tablet} {
    height: 150px;
    .title {
      padding-top: 30px;
      font-size: 18px;
    }
  }
`;

const MenuBlock = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const MenuCard = styled.div`
  padding: 10px;
  .menu-image {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
  }
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
  flex-direction: row;
  @media ${props => props.theme.tablet} {
    flex-direction: column;
  }
`;

const KoreaMap = styled.div`
  min-width: 450px;
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
  cursor: pointer;
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
  }
`;

export {
  StampBlock,
  StampCard,
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
