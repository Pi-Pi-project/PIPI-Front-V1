import React, { FC } from "react";
import { useDispatch } from "react-redux";
import * as S from "../styles";

const ManagementHeader: FC = () => {
  const dispatch = useDispatch();
  return (
    <S.ManagementHeader>
      <S.ProjectName>프로젝트A</S.ProjectName>
      <S.ProjectButton>프로젝트 완료</S.ProjectButton>
    </S.ManagementHeader>
  );
};

export default ManagementHeader;
