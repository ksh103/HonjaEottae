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
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    height: 500px;
  }
`;

const MapBlock = styled.div`
  width: 60%;
  height: 350px;
  background-color: white;

  @media ${props => props.theme.mobile} {
    width: 90%;
    margin-top: 10px;
  }
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
  @media ${props => props.theme.mobile} {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
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
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.pointColor};
    color: white;
  }
  :active {
    transform: scale(0.98);
  }
  ${props => {
    if (props.select) {
      return {
        backgroundColor: `${props.theme.colors.pointColor}`,
        color: 'white',
      };
    }
  }}
  @media ${props => props.theme.mobile} {
    margin-top: 10px;
  }
`;

// ImageList.tsx
const ImageListWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
  padding: 20px;
`;

const ImageListBlock = styled.div`
  padding: 0 30px;
  height: 250px;
  margin: 20px 0;
  .slick-prev:before,
  .slick-next:before {
    color: gray;
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
  }
`;

const ImageBlock = styled.div`
  & > div {
    display: flex;
    justify-content: center;
  }
  img {
    height: 250px;
    width: 95%;
    object-fit: cover;
  }
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
  ImageListWrapper,
  ImageListBlock,
  ImageBlock,
  MapBlock,
  ListWrapper,
  ListBlock,
  SelectBlock,
};
