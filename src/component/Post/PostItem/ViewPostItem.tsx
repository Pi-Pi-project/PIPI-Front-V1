import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import * as S from "./styles";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";
import { useHistory } from "react-router";
import { useCallback } from "react";

const ViewPostItem: FC<PostItem> = ({
  title,
  idea,
  id,
  img,
  userImg,
  userNickname,
  postSkillsets,
  userEmail
}) => {
  const history = useHistory();
  const gotoProfile = useCallback(() => {
    history.push(`/profile?email=${userEmail}`);
  }, [userEmail]);
  return (
    <S.Container>
      <S.PreviewImg src={getImgSrc(img)} />
      <S.ProjectIntroduce>
        <S.ProjectName to={`/board/detail/${id}`}>{title}</S.ProjectName>
        <S.ProjectManager onClick={gotoProfile}>
          <S.UserImg src={getImgSrc(userImg)} />
          <S.UserName>{userNickname}</S.UserName>
        </S.ProjectManager>
        <S.Introduce>
          <h3>한줄소개</h3>
          <p>{idea}</p>
        </S.Introduce>
        <S.SkillSets>
          {postSkillsets.map(({ skill }) => (
            <S.SkillImg src={getSkillImgSrc(skill)} />
          ))}
        </S.SkillSets>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ViewPostItem;
