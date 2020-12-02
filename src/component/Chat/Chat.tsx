import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  KeyboardEvent,
  useRef,
  UIEvent
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../lib/api";
import ChatSocket from "../../lib/ChatSocket";
import { checkEnterKey, getImgSrc } from "../../lib/func";
import { chatActionCreater } from "../../module/action/chat";
import { StoreType } from "../../module/reducer";
import { LoginedContainer } from "../../style/GlobalStyle";
import ChatItem from "../ChatItem/ChatItem";
import * as S from "./styles";

interface Props {
  id: number;
}

export interface ChatItme {
  email: string;
  img?: string;
  nickname?: string;
  content: string;
}

const socket = new ChatSocket(`${BASE_URL}:3000`);

const Chat: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const chatRef = useRef<HTMLDivElement>();
  const { myEmail, nowList, prevList, chat } = useSelector(
    (store: StoreType) => ({
      ...store.chat,
      myEmail: store.navigation.email
    })
  );

  const changeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(chatActionCreater.changeInput(e.target.value));
  }, []);

  const checkEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (checkEnterKey(e.key)) sendChat();
    },
    [chat]
  );

  const sendChat = useCallback(() => {
    socket.sendChat(
      { roomId: id, message: chat, userEmail: myEmail },
      dispatch
    );
    dispatch(chatActionCreater.changeInput(""));
  }, [chat]);

  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    if (!target.scrollTop) {
      dispatch(chatActionCreater.getChatSaga(id));
    }
  }, []);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [nowList]);

  useEffect(() => {
    socket.join(id);
    socket.receive(dispatch);
    setTimeout(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [100]);
  }, []);
  return (
    <S.Container>
      <LoginedContainer>
        <S.ChatGlobalStyle />
        <S.ChatHeader></S.ChatHeader>
        <S.ChatBody>
          <S.ChatContent ref={chatRef} onScroll={onScroll}>
            {prevList.map(({ message, mine, profileImg, userNickname }, i) => (
              <ChatItem
                key={message + i + ((Math.random() * 50) % 50)}
                isMine={mine}
                content={message}
                email={""}
                img={profileImg}
                nickname={userNickname}
              />
            ))}
            {nowList.map(({ nickname, img, content, email }, i) => (
              <ChatItem
                key={i}
                isMine={myEmail === email}
                content={content}
                email={email}
                img={img}
                nickname={nickname}
              />
            ))}
          </S.ChatContent>
          <S.ButtonWrap>
            <S.Input
              value={chat}
              onChange={changeInput}
              onKeyDown={checkEnter}
            />
            <S.Button onClick={sendChat}>보내기</S.Button>
          </S.ButtonWrap>
        </S.ChatBody>
      </LoginedContainer>
    </S.Container>
  );
};

export default Chat;
