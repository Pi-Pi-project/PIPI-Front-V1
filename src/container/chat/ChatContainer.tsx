import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router-dom";
import { Chat } from "../../component";
import { chatActionCreater } from "../../module/action/chat";

const ChatContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = match.params as any;
  useEffect(() => {
    dispatch(chatActionCreater.reset());
    dispatch(chatActionCreater.getChatSaga(Number(id)));
  });
  return <Chat id={Number(id)} />;
};

export default ChatContainer;
