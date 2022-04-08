import React from 'react';
import type { NextPage } from 'next';
import { MenuBlock } from './Nav.style';

interface MenuNameProps {
  currentName: string;
}

const Menu: NextPage<MenuNameProps> = props => {
  return <MenuBlock>{props.currentName}</MenuBlock>;
};

export default Menu;
