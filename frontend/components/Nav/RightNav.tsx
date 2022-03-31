import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Ul } from './Nav.style';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logIn, userInfo } from '../../store/user';
interface RightNavProps {
  open: boolean;
}
const RightNav: NextPage<RightNavProps> = ({ open }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.user); // 로그인 체크
  const LogoutButton = () => {
    sessionStorage.clear(); // userToken 세션스토리지 삭제
    document.location.href = '/'; // 로그아웃 처리하면 새로고침 해서 세션 사라진 걸 인식 해줘야함.
  };
  const setLogin = useCallback(() => {
    dispatch(logIn());
  }, []);
  useEffect(() => {
    let userEmail: any = sessionStorage.getItem('userEmail');
    if (!isLogin && sessionStorage.getItem('userToken')) {
      setLogin();
      dispatch(userInfo.request(userEmail));
    }
  }, []);
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
        {isLogin ? (
          <>
            <li>
              <Link href="/chat">
                <label>채팅</label>
              </Link>
            </li>
            <li>
              <Link href="/mypage">
                <label>마이페이지</label>
              </Link>
            </li>
            <li>
              <label onClick={LogoutButton}>로그아웃</label>
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
