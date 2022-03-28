import styled from 'styled-components';

const NavBlock = styled.div`
  background-color: ${props => props.theme.colors.pointColor};
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Jalnan';
  height: 55px;
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
    svg {
      font-size: 20px;
      margin-top: 5px;
    }
  }
  @media (max-width: 1023px) {
    padding: 0 20px;
    #title {
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
  @media (max-width: 1023px) {
    padding-left: 20px;
  }
`;

// Burger.tsx
const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#fff' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
// RightNav.tsx
const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.pointColor};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
export { NavBlock, MenuBlock, StyledBurger, Ul };
