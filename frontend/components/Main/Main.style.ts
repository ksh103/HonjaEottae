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
  border: 1px solid lightgray;
  border-radius: 1vw;
  padding: 20px;
  margin: 20px 0;
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 4px lightgray;
  }
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
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d2d0d0;
      border-radius: 10px;
      background-clip: padding-box;
      border: 5px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
  .stamp-line {
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: lightgray;
    top: 150px;
    left: 0px;
    right: 0px;
  }
  .stamp-name {
    width: 140px;
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
  }

  @media ${props => props.theme.tablet} {
    .stamp-line {
      height: 2px;
      top: 130px;
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
    .stamp-index {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
    }
  }
`;
const SliderCard = styled.div<{ image: string }>`
  cursor: pointer;
  color: white;
  height: 200px;
  width: 100%;
  position: relative;
  background-color: white;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)),
    url(${props => props.image}) center no-repeat;
  background-size: cover;

  .title {
    position: absolute;
    bottom: 30px;
    padding: 0 30px;
    font-size: 22px;
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    height: 150px;
    .title {
      bottom: 20px;
      padding: 0 20px;
      font-size: 16px;
    }
  }
`;

const MenuBlock = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const MenuCard = styled.div`
  padding: 10px;
  .menu-image {
    cursor: pointer;
    overflow: hidden;
    border-radius: 1vw;
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

const MainGraphBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${props => props.theme.tablet} {
    flex-direction: column;
  }
`;

const KoreaMap = styled.div`
  min-width: 400px;
  & > div {
    position: relative;
    width: 400px;
    margin: 0 auto;
  }
  img {
    width: 400px;
  }
`;
const MapAreaBox = styled.div<Location>`
  position: absolute;
  cursor: pointer;
  top: ${props => props.x + 'px'};
  left: ${props => props.y + 'px'};
  background-color: rgba(240, 240, 240, 0.75);
  border: 1px solid lightgray;
  border-radius: 6px;
  width: 45px;
  height: 45px;
  text-align: center;
  font-size: 10px;
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

const AreaCourses = styled.div`
  border: 1px solid lightgray;
  border-radius: 1vw;
  padding: 20px;
  width: 100%;
  max-width: 450px;
  @media ${props => props.theme.tablet} {
    max-width: 100%;
  }
  .area-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
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
  Wrapper,
  MainGraphBlock,
  KoreaMap,
  MapAreaBox,
  AreaCourses,
};
