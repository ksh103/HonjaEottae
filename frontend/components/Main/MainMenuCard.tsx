import Link from 'next/link';
import React from 'react';
import { MenuCard } from './MainPage.style';

interface propsType {
  title: string;
  url: string;
  image: string;
}

export default function MainMenuCard(props: propsType) {
  return (
    <Link href={props.url}>
      <MenuCard>
        <img src={props.image} />
      </MenuCard>
    </Link>
  );
}
