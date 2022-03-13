import type { NextPage } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav/Nav';

const Main: NextPage = () => {
  return (
    <>
      <Nav />
      <h1>Main</h1>
      <Link href="/travelTest">여행성향테스트 하러 가기</Link>
    </>
  );
};

export default Main;
