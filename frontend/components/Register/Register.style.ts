import styled from 'styled-components';

const RegisterWrapper = styled.div`
  .subTitle {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Jalnan';
  }
  input {
    margin: 0;
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
    width: 100%;
  }
  #title {
    width: 100%;
  }
  #hashTag {
    width: 100%;
    margin-bottom: 30px;
  }
  textarea {
    margin-top: 20px;
    width: 100%;
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
  #registerBtn {
    display: flex;
    justify-content: center;
  }
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    margin-left: 10px;
  }
`;

//TourList.tsx
const TourListWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 500px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
`;

export { RegisterWrapper, InputBlock, TourListWrapper };
