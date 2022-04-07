import type { NextPage } from 'next';
import MainManual from '../components/Main/MainManual';
import MypageComp from '../components/Mypage/MypageComp';

const Mypage: NextPage = () => {
  return (
    <>
      <MypageComp />
      <MainManual />
    </>
  );
};

export default Mypage;
