import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardDetailContent from "./BoardDetailContent/BoardDetailContent";
import BoardDetailHeader from "./BoardDetailHeader/BoardDetailHeader";
import * as S from "./styles";

const BoardDetail: FC = () => {
  return (
    <LoginedContainer>
      <S.BoardDetailGlobalStyle />
      <BoardDetailHeader />
      <BoardDetailContent />
    </LoginedContainer>
  );
};

export default BoardDetail;
