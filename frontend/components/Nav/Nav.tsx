import React from 'react';
import type { NextPage } from 'next';
import { Wrapper, NavBlock } from './Nav.style';
import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <Wrapper>
      <NavBlock>
        <Link href="/">
          <span id="title">혼자어때</span>
        </Link>
        <span id="menus">
          <Link href="/course">
            <span className="menu">여행 코스 추천</span>
          </Link>
          <Link href="/location">
            <span className="menu">내 주변 관광지</span>
          </Link>
          <Link href="/travelTest">
            <span className="menu">여행 성향 테스트</span>
          </Link>
          <Link href="/login">
            <span className="menu">로그인</span>
          </Link>
        </span>
      </NavBlock>
    </Wrapper>
  );
};

export default Nav;
