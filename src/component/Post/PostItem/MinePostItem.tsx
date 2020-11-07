import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import { BASE_IMG_URL } from "../../../lib/api";
import * as S from "./styles";
import { skillNameToSrc } from "../../../lib/static";
import { useHistory } from "react-router";
import { useCallback } from "react";

const MinePostItem: FC<PostItem> = ({
  title,
  idea,
  id,
  img,
  userImg,
  userNickname,
  postSkillsets
}) => {
  const history = useHistory();
  const clickHandler = useCallback(() => {
    history.push(`/board/member/${id}`);
  }, []);
  return (
    <S.Container>
      <S.PreviewImg src={`${BASE_IMG_URL}/${img}`} />
      <S.ProjectIntroduce>
        <S.ProjectName to={`/board/detail/${id}`}>{title}</S.ProjectName>
        <S.ProjectManager>
          <S.UserImg src={`${BASE_IMG_URL}/${userImg}`} />
          <S.UserName>{userNickname}</S.UserName>
        </S.ProjectManager>
        <S.Introduce>
          <h3>한줄소개</h3>
          <p>{idea}</p>
        </S.Introduce>
        <S.BottmWrap>
          <S.SkillSets>
            {postSkillsets.map(({ skill }) => (
              <S.SkillImg src={skillNameToSrc[skill]} />
            ))}
          </S.SkillSets>
          <S.ButtonWrap>
            <S.Button onClick={clickHandler}>신청자 목록 </S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default MinePostItem;
