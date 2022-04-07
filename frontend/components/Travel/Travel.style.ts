import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 0px 20px;
  padding-top: 80px;
  padding-bottom: 50px;
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
  @media ${props => props.theme.tablet} {
    padding-bottom: 20px;
    .main {
      font-size: 25px;
      font-weight: bold;
      font-family: 'Jalnan';
    }
    .sub {
      font-size: 20px;
    }
    .title {
      font-size: 14px;
    }
  }
`;
const MainImage = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    object-fit: cover;
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
  @media ${props => props.theme.tablet} {
    .mainName {
      font-size: 18px;
      label {
        font-size: 22px;
      }
    }
    .result {
      font-size: 12px;
      label {
        font-size: 15px;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  @media ${props => props.theme.tablet} {
    margin: 30px 0;
  }
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
  @media ${props => props.theme.tablet} {
    font-size: 14px;
    border: 4px solid black;
    box-shadow: 3px 3px black;
    height: 50px;
    width: 150px;
    margin: 0 10px;
  }
`;
const TestQuestion = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 60px 0;
  @media ${props => props.theme.tablet} {
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
  }
`;

const TestButton = styled.div`
  div {
    cursor: pointer;
    border: 1px solid lightgray;
    margin-bottom: 30px;
    padding: 25px;
    border-radius: 50px;
    font-size: 26px;
    &:hover {
      font-weight: bold;
      background-color: ${props => props.theme.colors.backgroundColor};
    }
    @media ${props => props.theme.tablet} {
      padding: 25px;
      margin-bottom: 20px;
      font-size: 18px;
    }
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
  @media ${props => props.theme.tablet} {
    padding: 10px;
    .title {
      font-size: 16px;
    }
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
  @media ${props => props.theme.tablet} {
    height: 150px;
    font-size: 18px;
    margin: 10px;
    .type-title {
      padding: 20px;
      width: 100%;
    }
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
  @media ${props => props.theme.tablet} {
    padding: 5px;
    .popular-title {
      font-size: 15px;
      margin: 5px;
    }
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
  @media ${props => props.theme.tablet} {
    font-size: 12px;
    label {
      font-size: 16px;
    }
  }
`;

export {
  Wrapper,
  Button,
  ButtonWrapper,
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
