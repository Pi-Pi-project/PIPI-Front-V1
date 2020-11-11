import React, { FC } from "react";
import { Portfolio } from "../../../../module/reducer/profile";
import * as S from "./styles";

const ProjectItem: FC<Portfolio> = ({ title, giturl, introduce }) => {
  return (
    <S.Container>
      <S.ProjectHeader>
        <S.ProjectName>{title}</S.ProjectName>
        <div>{giturl}</div>
      </S.ProjectHeader>
      <S.ProjectBody>{introduce}</S.ProjectBody>
    </S.Container>
  );
};

export default ProjectItem;
