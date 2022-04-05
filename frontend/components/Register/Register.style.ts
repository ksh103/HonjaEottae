import styled from 'styled-components';

const RegisterWrapper = styled.div`
  .subTitle {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Jalnan';

    @media ${props => props.theme.mobile} {
      font-size: 20px;
    }
  }

  input {
    margin: 0;
    margin-top: 20px;
    padding-left: 15px;
    height: 50px;
    font-size: 15px;
    border: none;
    border: 1px solid lightgray;
    border-radius: 1vw;
    ::placeholder {
      font-size: 15px;
    }
    @media ${props => props.theme.mobile} {
      ::placeholder {
        font-size: 12px;
      }
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
    border: 1px solid lightgray;
    border-radius: 1vw;
    resize: none;
    width: 100%;
    padding: 15px;
    ::placeholder {
      font-size: 15px;
    }
    @media ${props => props.theme.mobile} {
      ::placeholder {
        font-size: 12px;
      }
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
  border: 1px solid lightgray;
  border-radius: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: auto;
`;

const ImageWrapper = styled.div`
  margin: 0 10px;
  border-radius: 1vw;
  width: 200px;
  height: 200px;
  #image {
    width: 100%;
    height: 80%;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        transform: scale(1.05);
        transition: transform 0.5s;
      }
    }
  }
  #title {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media ${props => props.theme.mobile} {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
`;

const SelectListWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 1vw;
  border: 1px solid lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`;
const ListBlock = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 5px;
  height: 30px;
  border-radius: 1vw;
  background-color: white;
  display: flex;
  align-items: center;
  height: auto;
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
