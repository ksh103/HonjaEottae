import styled from 'styled-components';

const RegisterWrapper = styled.div`
  margin: 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
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
    background-color: #f5f5f5;
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
    padding-top: 15px;
    padding-left: 15px;
    width: 860px;
    height: 200px;
    border: none;
    border-radius: 1vw;
    background-color: #f5f5f5;
    resize: none;
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
  background-color: #f5f5f5;
  border-radius: 1vw;
`;

export { RegisterWrapper, InputBlock, TourListWrapper };
