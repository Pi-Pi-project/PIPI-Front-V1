import React, { FC } from "react";
import { LoginedContainer } from "../../style/GlobalStyle";
import ManagementBody from "./ManagemenBody/ManagementHeader";
import ManagementHeader from "./ManagementHeader/ManagementHeader";
import * as S from "./styles";

const Management: FC = () => {
  return (
    <LoginedContainer>
      <S.ManagementGlobalStyle />
      <S.Container>
        <ManagementHeader />
        <ManagementBody />
      </S.Container>
    </LoginedContainer>
  );
};

export default Management;
