import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/chat';
import { AiFillMessage } from 'react-icons/ai';
import ChatApp from './ChatApp';
import { ChatIcons } from './Chat.style';
const Chat: NextPage = () => {
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
    </>
  );
};

export default Chat;
