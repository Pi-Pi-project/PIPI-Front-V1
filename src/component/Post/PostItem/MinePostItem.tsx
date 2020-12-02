import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import * as S from "./styles";
import { useHistory } from "react-router";
import { useCallback } from "react";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";

const MinePostItem: FC<PostItem> = ({
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
  const clickHandler = useCallback(() => {
    history.push(`/board/member/${id}`);
  }, []);
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
        <S.BottmWrap>
          <S.SkillSets>
            {postSkillsets.map(({ skill }) => (
              <S.SkillImg src={getSkillImgSrc(skill)} />
            ))}
          </S.SkillSets>
          <S.ButtonWrap>
            <S.Button onClick={clickHandler}>신청자 목록</S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default MinePostItem;
