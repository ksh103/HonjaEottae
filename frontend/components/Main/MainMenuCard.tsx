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
      <MenuCard hoverable>
        <img src={props.image} />
        {/* <div>{props.title}</div> */}
      </MenuCard>
    </Link>
  );
}
