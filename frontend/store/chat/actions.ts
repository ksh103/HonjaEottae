import { createAction } from 'typesafe-actions';
import { MessageList } from './types';

export const SET_MESSAGE_LIST = 'chat/SET_MESSAGE_LIST';

// 소켓 연결 설정
export const SET_SOCKET_CONNECT = 'chat/SET_SOCKET_CONNECT';
export const SET_SOCKET_ID = 'chat/SET_SOCKET_ID';

// 모달창 설정
export const SET_MODAL_STATE = 'chat/SET_MODAL_STATE';

export const setMessageList = createAction(SET_MESSAGE_LIST)<MessageList>();
export const setSocketConnect = createAction(SET_SOCKET_CONNECT)<boolean>();
export const setSocketId = createAction(SET_SOCKET_ID)<any>();
export const setModalState = createAction(SET_MODAL_STATE)<boolean>();
