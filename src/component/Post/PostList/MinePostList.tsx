import React, { FC, UIEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { boardActionCreater } from "../../../module/action/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import * as S from "./styles";

const MinePostList: FC = () => {
  const dispatch = useDispatch();
  const onScrollHandler = useCallback((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.scrollHeight - target.clientHeight === target.scrollTop) {
      dispatch(boardActionCreater.getBoardListSaga());
    }
  }, []);
  return (
    <S.Container onScroll={onScrollHandler}>
      <LoginedContainer></LoginedContainer>
    </S.Container>
  );
};

export default MinePostList;
