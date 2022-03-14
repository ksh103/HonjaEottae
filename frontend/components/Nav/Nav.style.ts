import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
`;
const NavBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #title {
    padding-left: 100px;
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
  padding-left: 100px;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  font-size: 50px;
  color: white;
`;

export { Wrapper, NavBlock, MenuBlock };
