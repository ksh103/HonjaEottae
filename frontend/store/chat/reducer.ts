import { ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  SET_MESSAGE_LIST,
  SET_MODAL_STATE,
  SET_SOCKET_CONNECT,
  SET_SOCKET_ID,
} from './actions';
import { ChatAction, ChatState } from './types';

const initialState: ChatState = {
  messageList: [],
  isConnect: false,
  socketId: '',
  isModalVisible: false,
};

const chat = createReducer<ChatState, ChatAction>(initialState, {
  [SET_MESSAGE_LIST]: (state, action) =>
    produce(state, draft => {
      draft.messageList = draft.messageList.concat(action.payload); // 메시지 누적
    }),
  [SET_SOCKET_CONNECT]: (state, action) =>
    produce(state, draft => {
      draft.isConnect = action.payload;
    }),
  [SET_SOCKET_ID]: (state, action) =>
    produce(state, draft => {
      draft.socketId = action.payload;
    }),
  [SET_MODAL_STATE]: (state, action) =>
    produce(state, draft => {
      draft.isModalVisible = action.payload;
    }),
});

export default chat;
