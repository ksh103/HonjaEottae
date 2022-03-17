import React, { useState } from 'react';
import type { NextPage } from 'next';
import { NavBlock } from './Nav.style';
import Link from 'next/link';
import { BsPersonCircle } from 'react-icons/bs';

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

        <div id="menuList">
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
              <Link href="/travel">
                <label>여행성향테스트</label>
              </Link>
            </li>
            {login ? (
              <>
                <li>
                  <Link href="/mypage">
                    <label>마이페이지</label>
                  </Link>
                </li>
                <li>
                  <label>로그아웃</label>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">
                  <label>로그인</label>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </NavBlock>
    </>
  );
};

export default Nav;
