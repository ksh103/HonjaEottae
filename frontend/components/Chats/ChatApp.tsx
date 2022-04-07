import { NextPage } from 'next';
import { ChatWrapper, ChatBlock } from './Chat.style';
import socketIOClient from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  setMessageList,
  setSocketConnect,
  setSocketId,
} from '../../store/chat';
import { Button, Modal } from 'antd';
import { setModalState } from '../../store/chat';

const socket = socketIOClient('https://j6e103.p.ssafy.io:4002');
// const socket = socketIOClient('localhost:4002');
const ChatApp: NextPage = () => {
  const dispatch = useDispatch();
  const { messageList, isConnect } = useSelector(
    (state: RootState) => state.chat,
  );
  const { userInfo } = useSelector((state: RootState) => state.user);
  const { courseUserCount } = useSelector((state: RootState) => state.detail);
  const { tourId, courseName } = useSelector(
    (state: RootState) => state.record,
  );
  const [value, setValue] = useState('');
  // !초기 설정
  useEffect(() => {
    if (!isConnect) {
      dispatch(setSocketConnect(true));
      dispatch(setSocketId(socket));
      // 채팅 방 입장
      socket.emit('joinRoom', tourId, userInfo.userName);
    }
    socket.on('chat message', (msg: { name: string; message: string }) => {
      dispatch(setMessageList(msg));
    });
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit('chat message', tourId, userInfo.userName, value);
    setValue('');
  };

  // !스크롤 하단 고정
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // 채팅 리스트가 업데이트 될 때마다 제일 아래로 내려주기
    scrollToBottom();
  }, [messageList]);

  // !모달 설정
  const { isModalVisible } = useSelector((state: RootState) => state.chat);

  const handleCancel = () => {
    dispatch(setModalState(false));
  };

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      style={{ top: '5%' }}
      bodyStyle={{
        backgroundColor: '#F7323F',
        height: '580px',
      }}
    >
      <ChatWrapper>
        <ChatBlock>
          <div className="app__wrap">
            <div className="app__count">🙂현재 {courseUserCount}명 여행 중</div>
            <div id="info" className="app__info">
              혼자어때 채팅
            </div>
            <div id="info" className="app__title">
              {courseName}
            </div>
            <div id="chatWindow" className="app__window">
              {messageList.map((data: any, idx: number) =>
                data.name == userInfo.userName ? (
                  <div key={idx} className="message">
                    <div className="username">
                      {data.name == '' ? '이름 없음' : data.name}
                    </div>
                    <div className="message-text">
                      <div style={{ color: 'black' }}>{data.message}</div>
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="my-message">
                    <div className="username">
                      {data.name == '' ? '이름 없음' : data.name}
                    </div>
                    <div className="message-text">
                      <div style={{ color: 'white' }}>{data.message}</div>
                    </div>
                  </div>
                ),
              )}
              {/* 채팅 스크롤 아래로 내려주기 */}
              <div ref={messagesEndRef}></div>
            </div>
            <form
              className="chat-form"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => submit(e)}
            >
              <div className="app__input__wrap">
                <input
                  id="chatInput"
                  type="text"
                  autoFocus
                  className="app__input"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  value={value}
                  placeholder="대화를 입력해주세요"
                />
                <button
                  type="submit"
                  id="chatMessageSendBtn"
                  className="app__button"
                >
                  전송
                </button>
              </div>
            </form>
          </div>
        </ChatBlock>
      </ChatWrapper>
    </Modal>
  );
};

export default ChatApp;
