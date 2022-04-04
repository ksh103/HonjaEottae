import type { NextPage } from 'next';
import { Wrapper, ChatIcons } from './Footer.style';
import { AiFillMessage } from 'react-icons/ai';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../../store/chat';
import ChatApp from '../Chats/ChatApp';
const Footer: NextPage = () => {
  const dispatch = useDispatch();
  const { tourId } = useSelector((state: RootState) => state.record); // 여행중인지 체크(채팅)
  const showModal = () => {
    dispatch(setModalState(true));
  };
  return (
    <>
      {tourId != 0 && (
        <>
          <ChatIcons>
            <AiFillMessage onClick={showModal} />
          </ChatIcons>
          <ChatApp />
        </>
      )}

      <Wrapper>
        <div>Copyright ⓒ Honja Corp. All rights reserved</div>
        <div>주소 : 부산 강서구 녹산산업중로 333</div>
        <div>email : Honja@naver.com</div>
      </Wrapper>
    </>
  );
};

export default Footer;
