import { createAction } from 'typesafe-actions';
import { MessageList } from './types';

export const SET_MESSAGE_LIST = 'course/SET_MESSAGE_LIST';

export const setMessageList = createAction(SET_MESSAGE_LIST)<MessageList>();
