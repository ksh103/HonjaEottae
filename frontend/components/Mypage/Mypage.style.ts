import styled from 'styled-components';

const MypageWrapper = styled.div<{ height: string }>`
  margin-top: 20px;
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.backgroundColor};
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
`;

const GraphWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 85%;
  margin-top: 13px;
  .LGraph {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
  .RGraph {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
`;

const MyTravleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 95%;
  .map {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
  .diary {
    border-radius: 1vw;
    width: 48%;
    height: 90%;
    background-color: white;
  }
`;

const DiaryWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 10px;
  #title {
    /* pa */
    border-radius: 1vw;
    /* background-color: black; */
    height: 10%;
    /* color: white; */
  }
  #image {
    border-radius: 1vw;
    height: 35%;
    /* background-color: black; */
    /* color: white; */
  }
  #content {
    border-radius: 1vw;
    height: 45%;
    /* background-color: black; */
    /* color: white; */
  }
`;

export { MypageWrapper, GraphWrapper, MyTravleWrapper, DiaryWrapper };
