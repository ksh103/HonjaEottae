import React, { useState } from 'react';
import type { NextPage } from 'next';
import { NavBlock } from './Nav.style';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';
import Burger from './Burger';

const Nav: NextPage = () => {
  const [login, isLogin] = useState<boolean>(true);
  return (
    <>
      <NavBlock>
        <div>
          <Link href="/">
            <label id="title">혼자어때</label>
          </Link>
        </div>
        <div id="menuList"></div>
        <Burger />
      </NavBlock>
    </>
  );
};

export default Nav;
