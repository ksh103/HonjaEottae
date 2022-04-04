import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ChatAction = ActionType<typeof actions>;

export type MessageList = {
  name: string;
  message: string;
};

export type ChatState = {
  messageList: MessageList[];
};
