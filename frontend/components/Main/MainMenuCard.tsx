import Link from 'next/link';
import React from 'react';
import { MenuCard } from './Main.style';

interface propsType {
  title: string;
  url: string;
  image: string;
}

export default function MainMenuCard(props: propsType) {
  return (
    <Link href={props.url}>
      <MenuCard>
        <div className="menu-image">
          <img src={props.image} />
        </div>
      </MenuCard>
    </Link>
  );
}
