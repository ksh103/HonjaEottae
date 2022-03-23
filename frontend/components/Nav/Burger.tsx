import React, { useState } from 'react';
import type { NextPage } from 'next';
import RightNav from './RightNav';
import { StyledBurger } from './Nav.style';

const Burger: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
