import { ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';
import { SET_MESSAGE_LIST } from './actions';
import { ChatAction, ChatState } from './types';

const initialState: ChatState = {
  messageList: [],
};

const chat = createReducer<ChatState, ChatAction>(initialState, {
  [SET_MESSAGE_LIST]: (state, action) =>
    produce(state, draft => {
      draft.messageList = draft.messageList.concat(action.payload); // 메시지 누적
    }),
});

export default chat;
