import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import { LoginedContainer } from "../../../style/GlobalStyle";
import NoneList from "../../Post/PostList/NoneList";
import ApplyUserItem from "../../User/UserItem/ApplyUserItem";
import * as S from "./styles";

const BoardMember: FC = () => {
  const list = useSelector(
    (store: StoreType) => store.board.postApply.applyUsers
  );
  return (
    <S.Container>
      <S.BoardMemberGlobalStyle />
      <LoginedContainer>
        {list.length ? (
          list.map(({ userEmail, status, userImg, userNickname }) => (
            <ApplyUserItem
              status={status}
              userEmail={userEmail}
              userImg={userImg}
              userNickname={userNickname}
            />
          ))
        ) : (
          <NoneList />
        )}
      </LoginedContainer>
    </S.Container>
  );
};

export default BoardMember;
