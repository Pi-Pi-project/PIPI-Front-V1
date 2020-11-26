import React, { FC } from "react";
import { LoginedContainer } from "../../style/GlobalStyle";
import CreateTodoModal from "../Modal/createTodoModal";
import ProjectSuccessModal from "../Modal/ProjectSucessModal";
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
      <ProjectSuccessModal />
      <CreateTodoModal />
    </LoginedContainer>
  );
};

export default Management;
