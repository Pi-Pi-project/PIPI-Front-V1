import React, { FC } from "react";
import { Portfolio } from "../../../../module/reducer/profile";
import * as S from "./styles";

interface Props extends Portfolio {
  onClick?: () => void;
  active?: boolean;
}

const ProjectItem: FC<Props> = ({
  active,
  onClick,
  title,
  giturl,
  introduce
}) => {
  return (
    <S.Container onClick={onClick || undefined} active={active || false}>
      <S.ProjectHeader>
        <S.ProjectName>{title}</S.ProjectName>
        <div>{giturl}</div>
      </S.ProjectHeader>
      <S.ProjectBody>{introduce}</S.ProjectBody>
    </S.Container>
  );
};

export default ProjectItem;
