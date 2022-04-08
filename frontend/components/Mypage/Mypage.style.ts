import styled from 'styled-components';

const MypageWrapper = styled.div<{ height: string }>`
  margin: 20px 0px;
  padding: 20px;
  width: 100%;
  height: ${props => props.height};
  border: 1px solid lightgray;
  border-radius: 1vw;
  .subTitle {
    font-size: 20px;
    font-weight: bold;
  }
  @media ${props => props.theme.tablet} {
    height: auto;
  }
`;

const GraphWrapper = styled.div`
  margin: 20px 0px;
  padding: 20px;
  width: 100%;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 1vw;
  @media ${props => props.theme.tablet} {
    height: 650px;
  }
  .subTitle {
    font-size: 20px;
    font-weight: bold;
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

  @media ${props => props.theme.tablet} {
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
  @media ${props => props.theme.tablet} {
    font-size: 25px;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-family: 'Jalnan';
  @media ${props => props.theme.tablet} {
    font-size: 15px;
  }
`;

const CourseWrapper = styled.div`
  margin: 20px 0px;
  padding: 20px;
  padding-bottom: 10px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 1vw;
  .subTitle {
    font-size: 20px;
    font-weight: bold;
  }
  .list-block {
    padding: 0 20px;
  }
`;
const MypageReview = styled.div`
  border: 1px solid lightgray;
  border-radius: 1vw;
  padding: 20px;
  margin: 20px 0;
  .subTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const MyTravleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  .map {
    width: 48%;
    height: 600px;
  }
  .diary {
    width: 48%;
    height: 90%;
  }
  @media ${props => props.theme.tablet} {
    flex-direction: column;
    justify-content: center;
    .map {
      margin: 20px 0;
      width: 100%;
      height: 300px;
    }
    .diary {
      width: 100%;
      height: 90%;
    }
  }
`;

const DiaryBlock = styled.div`
  border: 2px solid lightgray;
  border-radius: 1vw;
  margin-left: 20px;
  padding: 30px;
  .review-image {
    height: 350px;
    border: 1px solid lightgray;
  }
  .review-date {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .review-name {
    font-size: 16px;
    font-family: 'Jalnan';
    font-weight: bold;
    padding-bottom: 5px;
  }
  .review-content {
    color: gray;
    margin-top: 10px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media ${props => props.theme.tablet} {
    margin-left: 0px;
    .review-image {
      height: 200px;
    }
  }
`;

const DiaryWrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid lightgray;
  border-radius: 1vw;
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
  @media ${props => props.theme.tablet} {
    height: 200px;
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
  DiaryBlock,
  MypageReview,
  MypageWrapper,
  GraphWrapper,
  GraphBlock,
  SubTitle,
  Title,
  MyTravleWrapper,
  DiaryWrapper,
  CourseWrapper,
};
