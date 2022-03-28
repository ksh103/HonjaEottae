import styled from 'styled-components';

const LocationWrapper = styled.div`
  .subTitle {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Jalnan';
  }
  .subTitle:first-child {
    margin-top: 0;
    font-size: 30px;
    font-weight: bold;
  }
`;

// MapList.tsx
const MapListWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MapBlock = styled.div`
  width: 60%;
  height: 380px;
  background-color: white;
  border-radius: 1vw;
`;

const ListWrapper = styled.div`
  width: 30%;
  height: 380px;
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListBlock = styled.div<{ select: boolean }>`
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.pointColor};
    color: white;
  }
  ${props => {
    if (props.select) {
      return {
        backgroundColor: `${props.theme.colors.pointColor}`,
        color: 'white',
      };
    }
  }}
`;

// ImageList.tsx
const ImgaeListWrapper = styled.div<{ height: string }>`
  margin-top: 20px;
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.backgroundColor};
  border-radius: 1vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageBlock = styled.div`
  width: 30%;
  height: 200px;
  background-color: white;
`;

const SelectBlock = styled.div<{ select: boolean }>`
  padding: 10px;
  ${props => {
    if (props.select) {
      return {
        border: `3px solid red`,
      };
    }
  }}
`;

export {
  LocationWrapper,
  MapListWrapper,
  ImgaeListWrapper,
  ImageBlock,
  MapBlock,
  ListWrapper,
  ListBlock,
  SelectBlock,
};
