import styled from 'styled-components';

const CourseWrapper = styled.div`
  input {
    margin: 0;
    width: 100%;
    height: 50px;
    font-size: 15px;
    border: none;
    border: 1px solid lightgray;
    border-radius: 1vw;
    padding-left: 15px;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

const CourseBlock = styled.div`
  .title {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Jalnan';
  }
  .react-horizontal-scrolling-menu--scroll-container {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d2d0d0;
      border-radius: 10px;
      background-clip: padding-box;
      border: 5px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }

  @media ${props => props.theme.mobile} {
    .title {
      font-size: 15px;
    }
  }
`;

// searchForm
const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  font-size: 15px;
  border: 0;
  height: 50px;
  width: 150px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.pointColor};
  color: white;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  @media ${props => props.theme.mobile} {
    font-size: 10px;
  }
`;

//course Form
const CourseFormWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 30px;
  #card {
    cursor: pointer;
  }
`;

const CourseSliderBlock = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: gray;
  }
  @media (max-width: 1000px) {
    margin: 0px 40px;
  }
`;
const CourseImageWrapper = styled.div`
  width: 100%;
  padding: 10px;
  .course-card-image {
    img {
      border: 1px solid lightgray;
      background-color: lightgray;
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
  .course-card-name {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 1000px) {
    .course-card-image {
      img {
        height: 200px;
      }
    }
  }
`;

export {
  CourseSliderBlock,
  CourseWrapper,
  CourseBlock,
  SearchFormWrapper,
  Button,
  CourseFormWrapper,
  CourseImageWrapper,
};
