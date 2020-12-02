import React, { FC } from "react";
import * as S from "./styles";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardWriteInputData from "./BoardWriteInputData/BoardWriteInputData";
import BoardWriteIntroduce from "./BoardWriteIntroduce/BoardWriteIntroduce";
import BoardWriteDeailIntroduce from "./BoardWriteDetailIntroduce/BoardWriteDetailIntroduce";
import BoardWriteModal from "../BoardModal/BoardWriteModal";

const BoardWrite: FC = () => {
  return (
    <S.Container>
      <S.BoardWriteGlobalStyle />
      <LoginedContainer>
        <BoardWriteInputData />
        <BoardWriteIntroduce />
        <BoardWriteDeailIntroduce />
        <BoardWriteModal />
      </LoginedContainer>
    </S.Container>
  );
};

export default BoardWrite;
