import { Card } from 'antd';
import styled from 'styled-components';

const TourMap = styled.div`
  height: 350px;
  @media ${props => props.theme.tablet} {
    height: 300px;
  }
  .customoverlay {
    position: relative;
    border-radius: 20px;
    float: left;
  }
  .customoverlay:nth-of-type(n) {
    position: relative;
    bottom: 55px;
    left: 3px;
    border-radius: 6px;
    border: 1px solid #ccc;
    float: left;
  }

  .customoverlay .title {
    display: block;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
    opacity: 0.5;
  }
`;
const ReviewBlock = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.backgroundColor};
`;
const TagBlock = styled.div`
  border-radius: 1vw;
  border: 1px solid lightgray;
  padding: 20px;
  margin: 20px 0;
  .tag-card {
    border-bottom: 1px solid lightgray;
    padding: 10px;
  }
  .tag-card:nth-child(4) {
    border: 0;
  }
  .code-name {
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;
const TagButton = styled.div<{ state: number }>`
  display: inline-block;
  border: 1px solid blue;
  padding: 8px 15px;
  margin: 10px;
  font-size: 18px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  color: gray;

  ${props => {
    if (props.state === 1) {
      return {
        color: 'black',
        backgroundColor: 'lightpink',
        fontWeight: 'bold',
      };
    }
  }}
`;
const StampBlock = styled.div`
  margin: 20px 10px;
`;

const StampCard = styled.div<{ $state: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  .stamp-card-line {
    position: absolute;
    top: 0;
    left: 140px;
    height: 100%;
    width: 4px;
    background-color: lightgray;
    z-index: -1;
    @media ${props => props.theme.tablet} {
      left: 80px;
      width: 3px;
    }
  }
  .stamp-card-image {
    padding: 20px 40px;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid lightgray;
      ${props => {
        if (props.$state) {
          return {
            mixBlendMode: 'luminosity',
          };
        }
      }}
    }

    @media ${props => props.theme.tablet} {
      padding: 20px;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
  .stamp-card-image .stamp {
    position: absolute;
    left: 40px;
    border: 4px solid ${props => props.theme.colors.pointColor};
    mix-blend-mode: normal;
    opacity: ${props => (props.$state ? 1 : 0)};
    @media ${props => props.theme.tablet} {
      left: 20px;
    }
  }
  .stamp-card-content {
    width: 100%;
  }
`;
const StampCardContent = styled(Card)<{ $state: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  margin: 20px;
  margin-left: 40px;
  height: 200px;
  background-color: ${props =>
    props.$state ? props.theme.colors.backgroundColor : 'white'};
  .stamp-card-index {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin: 0 7px;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    color: white;
    background-color: ${props =>
      props.$state ? 'gray' : props.theme.colors.pointColor};
  }
  .stamp-card-title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }
  .stamp-card-address {
    font-size: 18px;
    color: gray;
    margin: 10px 20px;
  }
  @media ${props => props.theme.tablet} {
    margin-left: 20px;
    height: 120px;
    .stamp-card-index {
      width: 22px;
      height: 22px;
      margin: 0;
      line-height: 22px;
      margin-right: 7px;
    }
    .stamp-card-title {
      font-size: 14px;
      margin: 5px 0;
    }
    .stamp-card-address {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;

export {
  TourMap,
  ReviewBlock,
  TagBlock,
  TagButton,
  StampBlock,
  StampCard,
  StampCardContent,
};
