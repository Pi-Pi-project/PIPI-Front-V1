import { ChatItemEx } from "../../action/chat";
import ChatAction, { chatAction } from "../../action/chat";
import { ChatItme } from "../../../component/Chat/Chat";

interface ChatReducerStore {
  prevList: ChatItemEx[];
  nowList: ChatItme[];
  index: number;
  chat: string;
}

const initialStore: ChatReducerStore = {
  index: 0,
  nowList: [],
  prevList: [],
  chat: ""
};

const chatReducer = (
  state: ChatReducerStore = initialStore,
  action: ChatAction
): ChatReducerStore => {
  switch (action.type) {
    case chatAction.GET_CHAT: {
      return {
        ...state,
        prevList: action.payload.reverse().concat(state.prevList),
        index: state.index + 1
      };
    }
    case chatAction.CHANGE_INPUT: {
      return {
        ...state,
        chat: action.payload
      };
    }
    case chatAction.RECEIVE_CHAT: {
      return {
        ...state,
        nowList: state.nowList.concat(action.payload)
      };
    }
    case chatAction.RESET: {
      return { ...initialStore };
    }
    case chatAction.SEND_CHAT: {
      const { message, roomId, userEmail } = action.payload;
      return {
        ...state,
        nowList: state.nowList.concat({
          content: message,
          email: userEmail
        })
      };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
