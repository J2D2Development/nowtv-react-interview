import { getMessages, getMembers } from './data';

export function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

export function getMembersInfo() {
  return {
    type: 'MEMBER_LOADING',
    payload: getMembers()
  };
}