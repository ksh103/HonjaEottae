import React from 'react';
import type { NextPage } from 'next';
import { Wrapper, MenuBlock } from './Nav.style';

interface MenuNameProps {
  currentName: string;
}

const Menu: NextPage<MenuNameProps> = props => {
  return (
    <Wrapper>
      <MenuBlock>{props.currentName}</MenuBlock>
    </Wrapper>
  );
};

export default Menu;
