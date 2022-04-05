import styled from 'styled-components';

const MypageWrapper = styled.div<{ height: string }>`
  margin: 20px 0px;
  width: 100%;
  height: ${props => props.height};
  border: 1px solid lightgray;
  border-radius: 1vw;
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  @media ${props => props.theme.mobile} {
    height: auto;
  }
`;

const GraphWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 1vw;
  @media ${props => props.theme.mobile} {
    height: 650px;
  }
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;

const GraphBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  .LGraph {
    border-radius: 1vw;
    width: 48%;
    height: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div {
      font-family: 'Jalnan';
    }
  }
  .RGraph {
    width: 48%;
    height: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    div {
      font-family: 'Jalnan';
    }
  }

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    .LGraph {
      width: 360px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 15px;
      div {
        font-family: 'Jalnan';
      }
    }
    .RGraph {
      width: 360px;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      div {
        font-family: 'Jalnan';
        margin-bottom: 15px;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-family: 'Jalnan';
  @media ${props => props.theme.mobile} {
    font-size: 25px;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-family: 'Jalnan';
  @media ${props => props.theme.mobile} {
    font-size: 15px;
  }
`;

const CourseWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 280px;
  border: 1px solid lightgray;
  border-radius: 1vw;
  @media ${props => props.theme.mobile} {
    height: 230px;
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .subTitle {
    height: 10px;
    padding: 15px;
    font-size: 20px;
    font-family: 'Jalnan';
  }
`;

const MyTravleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 95%;
  .map {
    width: 48%;
    height: 90%;
    background-color: white;
  }
  .diary {
    width: 48%;
    height: 90%;
    background-color: white;
    border: 1px solid lightgray;
  }
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    .map {
      margin: 20px 0;
      width: 80%;
      height: 300px;
      background-color: white;
    }
    .diary {
      width: 80%;
      height: 90%;
      border: 1px solid lightgray;

      /* border: 1px solid lightgray; */
    }
    margin-bottom: 20px;
  }
`;

const DiaryWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fafafa;
  #title {
    height: 10%;
    height: auto;
    font-weight: bold;
    text-align: center;
    margin: 20px;
  }
  #noRecord {
    text-align: center;
    font-family: 'Jalnan';
    font-size: large;
    padding-bottom: 20px;
  }
  #image {
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid lightgray;
    }
  }
  #content {
    height: 40%;
    margin: 20px;
    text-decoration: underline;
    text-underline-position: under;
    word-break: break-all; // 글자 넘어가면 줄바꿈
    overflow: auto;
  }
  @media ${props => props.theme.mobile} {
    #title {
      height: 10%;
      font-family: 'Jalnan';
      margin: 10px;
    }

    #noRecord {
      text-align: center;
      font-family: 'Jalnan';
      font-size: small;
    }
    #image {
      height: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    #content {
      height: 40%;
      margin: 10px;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export {
  MypageWrapper,
  GraphWrapper,
  GraphBlock,
  SubTitle,
  Title,
  MyTravleWrapper,
  DiaryWrapper,
  CourseWrapper,
};
