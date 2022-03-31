import { Card } from 'antd';
import styled from 'styled-components';

const ReviewBlock = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

const StampBlock = styled.div`
  margin: 20px 10px;
`;

const StampCard = styled.div`
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
    }
    @media ${props => props.theme.tablet} {
      padding: 20px;
      img {
        width: 120px;
        height: 120px;
      }
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
export { ReviewBlock, StampBlock, StampCard, StampCardContent };
