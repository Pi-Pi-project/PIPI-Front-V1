import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionCreater } from "../../../module/action/modal";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const ManagementHeader: FC = () => {
  const dispatch = useDispatch();
  const projectName = useSelector((store: StoreType) => store.management);
  const projectSuccess = useCallback(() => {
    dispatch(modalActionCreater.projectSuccessModalOn());
  }, []);
  return (
    <S.ManagementHeader>
      <S.ProjectName>프로젝트A</S.ProjectName>
      <S.ProjectButton onClick={projectSuccess}>프로젝트 완료</S.ProjectButton>
    </S.ManagementHeader>
  );
};

export default ManagementHeader;
