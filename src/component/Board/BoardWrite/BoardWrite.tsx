import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardWriteInputData from "./BoardWriteInputData/BoardWriteInputData";

const BoardWrite: FC = () => {
  return (
    <LoginedContainer>
      <BoardWriteInputData />
    </LoginedContainer>
  );
};

export default BoardWrite;
