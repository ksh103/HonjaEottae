import type { NextPage } from 'next';
import { TEST } from '../../assets/test';
import Link from 'next/link';
import {
  Button,
  MainImage,
  Wrapper,
  ButtonWrapper,
} from '../../components/Travel/Travel.style';
import Nav from '../../components/Nav/Nav';

const Travel: NextPage = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <MainImage>
          <img src="/images/3.png" />
        </MainImage>
        <div className="main">{TEST.info.mainTitle}</div>
        <div className="sub">{TEST.info.subTitle}</div>
        <ButtonWrapper>
          <Link href="/travel/test">
            <Button>테스트 시작</Button>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Travel;
