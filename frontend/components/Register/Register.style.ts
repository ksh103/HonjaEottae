import styled from 'styled-components';

const RegisterWrapper = styled.div`
  margin: 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .subTitle {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputBlock = styled.div`
  input {
    margin-top: 20px;
    padding-left: 15px;
    height: 50px;
    font-size: 15px;
    border: none;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 1vw;
    ::placeholder {
      font-size: 15px;
    }
  }
  #name {
    width: 700px;
    margin-right: 10px;
  }
  #title {
    width: 860px;
  }
  #hashTag {
    width: 860px;
    margin-bottom: 50px;
  }
  textarea {
    margin-top: 20px;
    width: 860px;
    height: 200px;
    border: none;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 1vw;
    resize: none;
    padding: 15px;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

//TourList.tsx
const TourListWrapper = styled.div`
  margin-top: 20px;
  width: 860px;
  height: 500px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
`;

export { RegisterWrapper, InputBlock, TourListWrapper };
