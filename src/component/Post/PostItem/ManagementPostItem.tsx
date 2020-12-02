import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import { getImgSrc } from "../../../lib/func";
import { ProjectItem } from "../../../module/reducer/board";
import * as S from "./styles";

const ManagementPostItem: FC<ProjectItem> = ({ title, img, idea, id }) => {
  const history = useHistory();

  const goManagement = useCallback(() => {
    history.push(`/management/${id}`);
  }, []);

  const goChat = useCallback(() => {
    history.push(`/chat/${id}`);
  }, []);
  return (
    <S.Container>
      <S.PreviewImg src={getImgSrc(img)} />
      <S.ProjectIntroduce>
        <S.ProjectName to={`/management/${id}`}>{title}</S.ProjectName>
        <S.Introduce>
          <h3>한줄소개</h3>
          <p>{idea}</p>
        </S.Introduce>
        <S.BottmWrap>
          <S.SkillSets />
          <S.ButtonWrap>
            <S.Button onClick={goManagement}>관리</S.Button>
            <S.Button onClick={goChat}>채팅</S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ManagementPostItem;
