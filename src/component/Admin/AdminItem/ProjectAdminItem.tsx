import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { adminMainActionCreater } from "../../../module/action/adminMain";
import { modalActionCreater } from "../../../module/action/modal";
import { ProjectApplyItem } from "../../../module/reducer/AdminMain";
import * as S from "./styles";

const ProjectAdminItem: FC<ProjectApplyItem> = ({ projectId, title }) => {
  const dispatch = useDispatch();
  const onProjectModal = useCallback(() => {
    dispatch(adminMainActionCreater.getProjectDetailSaga(projectId));
  }, []);
  const success = useCallback(() => {
    dispatch(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "프로젝트 완료 신청을 수락했습니다"
      })
    );
  }, []);

  return (
    <S.Container>
      <div>
        <S.Span>{title}</S.Span>
      </div>
      <div>
        <S.Button color="#3B3B3B" onClick={onProjectModal}>
          확인
        </S.Button>
        <S.Button color="#3B3B3B">거절</S.Button>
        <S.Button onClick={success} color="#FC2F2F">
          승낙
        </S.Button>
      </div>
    </S.Container>
  );
};

export default ProjectAdminItem;
