import styled from 'styled-components';

const Wrapper = styled.div``;
const NavBlock = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
  position: fixed;
  width: 100%;
  padding-top: 10px;
  padding-left: 100px;
  padding-bottom: 10px;
  margin-bottom: 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  #title {
    font-size: 25px;
    cursor: pointer;
  }
  #menus {
    padding-right: 100px;
    font-size: 18px;
    .menu {
      margin-right: 20px;
      cursor: pointer;
    }
  }
`;
const MenuBlock = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
  padding-top: 55px;
  padding-left: 100px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  font-size: 50px;
  color: white;
`;

export { Wrapper, NavBlock, MenuBlock };
