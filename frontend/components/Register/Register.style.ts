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
    margin-right: 10px;
  }
  #title {
    width: 100%;
  }
  #date {
    width: 100%;
  }
  textarea {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
    height: 200px;
    border: none;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 1vw;
    resize: none;
    width: 100%;
    padding: 15px;
    ::placeholder {
      font-size: 15px;
    }
  }
  #registerBtn {
    display: flex;
    justify-content: center;
  }
  #titleWrapper {
    display: flex;
  }
  .titleDiv {
    width: 100%;
    :nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  padding-top: 20px;
  width: 100%;
  height: 450px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: auto;
`;

const ImageWrapper = styled.div`
  margin-left: 18px;
  border-radius: 1vw;
  width: 200px;
  height: 200px;
  #image {
    background-color: white;
    width: 100%;
    height: 80%;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1vw;
    }
    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s;
    }
  }
  #title {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
`;

const SelectListWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ListBlock = styled.div`
  margin-left: 10px;
  padding: 5px;
  height: 30px;
  border-radius: 1vw;
  background-color: white;
  display: flex;
  align-items: center;
  #removeBtn {
    margin-left: 3px;
    margin-right: 3px;
    color: red;
    font-weight: bold;
    cursor: pointer;
  }
`;

export {
  RegisterWrapper,
  InputBlock,
  TourListWrapper,
  ImageWrapper,
  SelectListWrapper,
  ListBlock,
  RegisterFormWrapper,
};
