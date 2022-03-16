import styled from 'styled-components';

const NavBlock = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Jalnan';
  height: 50px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  color: white;

  #title {
    font-size: 25px;
    cursor: pointer;
  }
  ul li {
    float: left;
    margin-left: 20px;
    color: white;
    font-size: 18px;
    label {
      cursor: pointer;
    }
  }
`;
const MenuBlock = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
  font-family: 'Jalnan';
  color: white;
  padding-top: 55px;
  padding-left: 100px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  font-size: 50px;
`;

export { NavBlock, MenuBlock };
