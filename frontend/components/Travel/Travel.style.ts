import styled from 'styled-components';
import { Card } from 'antd';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 70px 20px;
  text-align: center;
  .main {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: 'Jalnan';
  }
  .sub {
    font-size: 28px;
  }
  .title {
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;
const TestLoading = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    margin: 20px 0px;
  }
  .loading-title {
    margin: 10px 0;
    font-size: 20px;
  }
`;

const TestTitle = styled.div<{ color: string }>`
  margin-top: 50px;
  .mainName {
    font-size: 25px;
    margin: 20px;
    label {
      font-size: 30px;
      font-weight: bold;
      color: ${props => props.color};
    }
  }
  .result {
    font-size: 17px;
    label {
      color: ${props => props.color};
      font-size: 22px;
      font-weight: bold;
    }
  }
  .result-image {
    img {
      width: 80%;
      border: 1px solid lightgray;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const Button = styled.div<{ color?: string }>`
  cursor: pointer;
  border-radius: 100px;
  width: 250px;
  height: 100px;
  border: 6px solid black;
  background-color: ${props =>
    props.color ? '#FEE500' : props.theme.colors.pointColor};
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  box-shadow: 5px 5px black;
  margin: 0 20px;
`;
const TestQuestion = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 90px 0;
`;

const TestButton = styled.div`
  div {
    cursor: pointer;
    border: 1px solid lightgray;
    margin: 30px 0;
    padding: 25px;
    border-radius: 50px;
    font-size: 26px;
    &:hover {
      font-weight: bold;
      background-color: ${props => props.theme.colors.backgroundColor};
    }
  }
`;

const Header = styled.div`
  z-index: 100;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Jalnan';
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.pointColor};
  label {
    color: white;
    cursor: pointer;
  }
`;

const MainImage = styled.div`
  margin-bottom: 50px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const TestResultCard = styled.div`
  border: 1px solid lightgray;
  border-radius: 1vw;
  padding: 20px;
  margin: 20px 0;
  .title {
    font-size: 20px;
    text-align: left;
  }
`;

const TypeCourseBlock = styled.div`
  margin: 20px;
  position: relative;
  background-color: gray;
  height: 300px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  border-radius: 1vw;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
  .type-title {
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px;
    width: 70%;
  }
  &:hover {
    img {
      opacity: 1;
      transition: 0.3s;
    }
    text-shadow: 0 0 5px black;
  }
`;

const PopularTypeBlock = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 25px;
  .popular-title {
    font-size: 20px;
    margin: 10px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ResultFooter = styled.div`
  font-size: 20px;
  label {
    color: ${props => props.theme.colors.pointColor};
    font-family: 'Jalnan';
    font-size: 25px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export {
  Wrapper,
  Button,
  ButtonWrapper,
  Header,
  MainImage,
  TestLoading,
  TestButton,
  TestQuestion,
  TestResultCard,
  TestTitle,
  TypeCourseBlock,
  PopularTypeBlock,
  ResultFooter,
};
