import type { NextPage } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav/Nav';

const Main: NextPage = () => {
  return (
    <>
      <Nav currentName="Main" />
      <Link href="/travelTest">여행성향테스트 하러 가기</Link>
    </>
  );
};

export default Main;
