import { ChatItme } from "../../../component/Chat/Chat";
import { ChatReq } from "../../../lib/ChatSocket";

export interface ChatItemEx {
  userNickname: string;
  message: string;
  profileImg: string;
  mine: boolean;
}

const GET_CHAT_SAGA = "chat/GET_CHAT_SAGA" as const;
const GET_CHAT = "chat/GET_CHAT" as const;
const CHANGE_INPUT = "chat/CHANGE_INPUT" as const;
const RECEIVE_CHAT = "chat/RECEIVE_CHAT" as const;
const RESET = "chat/RESET" as const;
const SEND_CHAT = "chat/SEND_CHAT" as const;

const reset = () => ({
  type: RESET
});
const receiveChat = (payload: ChatItme) => ({
  type: RECEIVE_CHAT,
  payload
});
const getChatSaga = (payload: number) => ({
  type: GET_CHAT_SAGA,
  payload
});
const getChat = (payload: ChatItemEx[]) => ({
  type: GET_CHAT,
  payload
});
const changeInput = (payload: string) => ({
  type: CHANGE_INPUT,
  payload
});
const sendChat = (payload: ChatReq) => ({
  type: SEND_CHAT,
  payload
});

type ChatAction = ReturnType<
  | typeof getChat
  | typeof getChatSaga
  | typeof changeInput
  | typeof receiveChat
  | typeof reset
  | typeof sendChat
>;

export const chatAction = {
  GET_CHAT_SAGA,
  GET_CHAT,
  CHANGE_INPUT,
  RECEIVE_CHAT,
  RESET,
  SEND_CHAT
};

export const chatActionCreater = {
  getChatSaga,
  getChat,
  changeInput,
  receiveChat,
  reset,
  sendChat
};

export default ChatAction;
