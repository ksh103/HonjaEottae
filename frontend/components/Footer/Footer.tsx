import type { NextPage } from 'next';
import { Wrapper } from './Footer.style';

const Footer: NextPage = () => {
  return (
    <Wrapper>
      <div>Copyright ⓒ Honja Corp. All rights reserved</div>
      <div>주소 : 부산 강서구 녹산산업중로 333</div>
      <div>email : Honja@naver.com</div>
    </Wrapper>
  );
};

export default Footer;
