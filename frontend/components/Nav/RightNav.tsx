import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Ul } from './Nav.style';
import Link from 'next/link';
interface RightNavProps {
  open: boolean;
}
const RightNav: NextPage<RightNavProps> = ({ open }) => {
  const [login, isLogin] = useState<boolean>(true);
  return (
    <>
      <Ul open={open}>
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
      </Ul>
    </>
  );
};

export default RightNav;
