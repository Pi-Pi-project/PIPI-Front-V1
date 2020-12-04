import React, { FC } from "react";
import { getImgSrc } from "../../lib/func";
import { ChatItme } from "../Chat/Chat";
import * as S from "./styles";

interface Props extends ChatItme {
  isMine: boolean;
}

const ChatItem: FC<Props> = ({ isMine, email, content, img, nickname }) => {
  return (
    <S.Container isMine={isMine}>
      {isMine ? (
        <>
          <S.UserWrap>
            <S.Content>{content}</S.Content>
          </S.UserWrap>
        </>
      ) : (
        <>
          <S.ProfileWrap>
            <S.UserName isMine={isMine}>{nickname}</S.UserName>
            <S.ProfileImg src={getImgSrc(img)} />
          </S.ProfileWrap>
          <S.UserWrap>
            <S.Content>{content}</S.Content>
          </S.UserWrap>
        </>
      )}
    </S.Container>
  );
};

export default ChatItem;
