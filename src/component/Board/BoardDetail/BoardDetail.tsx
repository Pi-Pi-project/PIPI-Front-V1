import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardDetailHeader from "./BoardDetailHeader/BoardDetailHeader";
import { BoardDetailGlobalStyle } from "./styles";

const BoardDetail: FC = () => {
  return (
    <LoginedContainer>
      <BoardDetailGlobalStyle />
      <BoardDetailHeader />
    </LoginedContainer>
  );
};

export default BoardDetail;
