import Router from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MenuCard } from './Main.style';

interface propsType {
  index: number;
  title: string;
  url: string;
  image: string;
}

export default function MainMenuCard(props: propsType) {
  const { isLogin } = useSelector((state: RootState) => state.user);
  const movePage = () => {
    if (props.index === 3 && !isLogin) {
      alert('로그인이 필요합니다.');
      Router.push('/login');
    } else {
      Router.push(props.url);
    }
  };

  return (
    <MenuCard onClick={movePage}>
      <div className="menu-image">
        <img src={props.image} />
      </div>
    </MenuCard>
  );
}
