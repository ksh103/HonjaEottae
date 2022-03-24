import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 90px 0;
`;

const SliderCard = styled.div`
  cursor: pointer;
  background-color: lightgoldenrodyellow;
  color: white;
  height: 200px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .title {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 25px;
    font-size: 22px;
    width: 100%;
  }
`;

const MenuBlock = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const MenuCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.5s;
    }
  }
`;

const TravelBlock = styled.div`
  padding: 30px 0;
`;

export { MenuBlock, MenuCard, SliderCard, TravelBlock, Wrapper };
