import React, { FC } from "react";
import * as S from "../styles";

const ManagementHeader: FC = () => {
  return (
    <S.ManagementHeader>
      <S.ProjectName>프로젝트A</S.ProjectName>
      <S.ProjectButton>프로젝트 완료</S.ProjectButton>
    </S.ManagementHeader>
  );
};

export default ManagementHeader;
