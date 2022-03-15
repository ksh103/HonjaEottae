import styled from 'styled-components';

const CourseWrapper = styled.div`
  margin: 0 300px;
  input {
    width: 600px;
    font-size: 15px;
    border: none;
    background-color: #f5f5f5;
    border-radius: 1vw;
    padding-left: 15px;
    ::placeholder {
      font-size: 15px;
    }
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const CourseBlock = styled.div`
  .title {
    margin-top: 30px;
    font-size: 1vw;
    font-weight: bold;
  }
`;

// searchForm

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  * {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  font-size: 1vw;
  border: 0;
  height: 50px;
  width: 150px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.pointColor};
  color: white;
  cursor: pointer;
  :hover {
  }
`;

//course Form
const CourseFormWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 30px;
  #space {
    padding-left: 5px;
    padding-right: 5px;
  }
  #card {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  CourseWrapper,
  CourseBlock,
  SearchFormWrapper,
  Button,
  CourseFormWrapper,
};
