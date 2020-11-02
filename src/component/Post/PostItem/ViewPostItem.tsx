import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import { BASE_URL } from "../../../lib/api";
import * as S from "./styles";
import { skillNameToSrc } from "../../../lib/static";

const ViewPostItem: FC<PostItem> = ({
  title,
  idea,
  img,
  userImg,
  userNickname,
  postSkillsets
}) => {
  return (
    <S.Container>
      <S.PreviewImg src={`${BASE_URL}/image/${img}/`} />
      <S.ProjectIntroduce>
        <S.ProjectName>{title}</S.ProjectName>
        <S.ProjectManager>
          <S.UserImg src={`${BASE_URL}/image/${userImg}/`} />
          <S.UserName>{userNickname}</S.UserName>
        </S.ProjectManager>
        <S.Introduce>
          <h3>한줄소개</h3>
          <p>{idea}</p>
        </S.Introduce>
        <S.SkillSets>
          {postSkillsets.map(({ skill }) => (
            <S.SkillImg src={skillNameToSrc[skill]} />
          ))}
        </S.SkillSets>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ViewPostItem;