import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/chat';
import { AiFillMessage } from 'react-icons/ai';
import ChatApp from './ChatApp';
import { ChatIcons } from './Chat.style';
import { getUserCount } from '../../store/record';
const Chat: NextPage = () => {
  const dispatch = useDispatch();
  const { tourId } = useSelector((state: RootState) => state.record); // 여행중인지 체크(채팅)
  const showModal = () => {
    dispatch(setModalState(true));
  };
  const clickChat = () => {
    if (tourId !== 0) dispatch(getUserCount.request(tourId));
  };
  return (
    <>
      {tourId != 0 && (
        <>
          <ChatIcons onClick={clickChat}>
            <AiFillMessage onClick={showModal} />
          </ChatIcons>
          <ChatApp />
        </>
      )}
    </>
  );
};

export default Chat;
