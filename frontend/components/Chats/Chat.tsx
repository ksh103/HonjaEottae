import { NextPage } from 'next';
import socketIOClient from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading/Loading';
import ChatApp from './ChatApp';

const socket = socketIOClient('localhost:4002');

const Chat: NextPage = () => {
  const [currentSocket, setCurrentSocket] = useState<any>();
  useEffect(() => {
    const socket = socketIOClient('localhost:4002');
    setCurrentSocket(socket);
  }, []);

  return <>{currentSocket ? <ChatApp></ChatApp> : <Loading />}</>;
};

export default Chat;
