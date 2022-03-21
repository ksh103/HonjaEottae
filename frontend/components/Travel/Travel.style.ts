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

const TestTitle = styled.div<{ color: string }>`
  margin-top: 50px;
  label {
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.color};
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
  }
`;

const TestResultCard = styled(Card)`
  margin: 30px 0;
`;

export {
  Wrapper,
  Button,
  ButtonWrapper,
  Header,
  MainImage,
  TestButton,
  TestQuestion,
  TestResultCard,
  TestTitle,
};
