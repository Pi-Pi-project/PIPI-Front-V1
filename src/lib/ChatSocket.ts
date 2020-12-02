import { Dispatch } from "redux";
import io from "socket.io-client";
import { chatActionCreater } from "../module/action/chat";

export interface ChatReq {
  roomId: number;
  userEmail: string;
  message: string;
}

export default class ChatSocket {
  socket: SocketIOClient.Socket;
  constructor(url: string) {
    this.socket = io(url);
  }
  receive(dispatch: Dispatch) {
    this.socket.on("receive", (...args: any) => {
      const [email, img, nickname, content] = args;
      dispatch(
        chatActionCreater.receiveChat({ email, img, nickname, content })
      );
    });
  }
  join(roomId: string | number) {
    this.socket.emit("join", roomId);
  }
  sendChat(data: ChatReq, dispatch: Dispatch) {
    this.socket.emit("chat", data);
    dispatch(chatActionCreater.sendChat(data));
  }
}
