import styled from 'styled-components';

const LocationWrapper = styled.div`
  margin: 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subTitle {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  .subTitle:first-child {
    margin-top: 0;
    font-size: 20px;
    font-weight: bold;
  }
`;

// MapList.tsx
const MapListWrapper = styled.div`
  margin-top: 20px;
  width: 860px;
  height: 400px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MapBlock = styled.div`
  width: 500px;
  height: 380px;
  background-color: white;
  border-radius: 1vw;
`;

const ListWrapper = styled.div`
  width: 300px;
  height: 380px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListBlock = styled.div`
  width: 250px;
  height: 50px;
  background-color: white;
  border-radius: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.pointColor};
    color: white;
  }
`;

// ImageList.tsx
const ImgaeListWrapper = styled.div<{ height: string }>`
  margin-top: 20px;
  width: 860px;
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageBlock = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
`;

export {
  LocationWrapper,
  MapListWrapper,
  ImgaeListWrapper,
  ImageBlock,
  MapBlock,
  ListWrapper,
  ListBlock,
};
