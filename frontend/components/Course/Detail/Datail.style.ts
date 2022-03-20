import styled from 'styled-components';

const DetailHeader = styled.div`
  ul li {
    float: right;
    margin-left: 30px;
    font-size: 25px;
    cursor: pointer;
  }
  padding-bottom: 60px;
`;

const Title = styled.div`
  .back {
    display: flex;
    margin: 10px 30px;
  }
  font-size: 35px;
  display: flex;
`;

const Content = styled.div`
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .graph {
    height: 200px;
  }
  font-size: 15px;
  margin: 10px 0;
  padding: 20px;
  border-radius: 1vw;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

const Review = styled.div`
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  margin: 20px 0;
  img {
    object-fit: cover;
  }
`;

export { DetailHeader, Title, Content, Review };
