import React from 'react';
import type { NextPage } from 'next';
import { NavBlock } from './Nav.style';
import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <>
      <NavBlock>
        <div>
          <Link href="/">
            <label id="title">혼자어때</label>
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <Link href="/course">
                <label>여행코스추천</label>
              </Link>
            </li>
            <li>
              <Link href="/location">
                <label>내주변관광지</label>
              </Link>
            </li>
            <li>
              <Link href="/travelTest">
                <label>여행성향테스트</label>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <label>로그인</label>
              </Link>
            </li>
          </ul>
        </div>
      </NavBlock>
    </>
  );
};

export default Nav;
