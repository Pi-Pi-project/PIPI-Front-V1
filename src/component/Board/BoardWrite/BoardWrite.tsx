import React, { FC } from "react";
import * as S from "./styles";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardWriteInputData from "./BoardWriteInputData/BoardWriteInputData";
import BoardWriteIntroduce from "./BoardWriteIntroduce/BoardWriteIntroduce";
import BoardWriteDeailIntroduce from "./BoardWriteDetailIntroduce/BoardWriteDetailIntroduce";

const BoardWrite: FC = () => {
  return (
    <S.Container>
      <S.BoardWriteGlobalStyle />
      <LoginedContainer>
        <BoardWriteInputData />
        <BoardWriteIntroduce />
        <BoardWriteDeailIntroduce />
      </LoginedContainer>
    </S.Container>
  );
};

export default BoardWrite;
