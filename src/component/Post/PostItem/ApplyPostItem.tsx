import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import { BASE_IMG_URL } from "../../../lib/api";
import * as S from "./styles";
import { skillNameToSrc } from "../../../lib/static";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { boardActionCreater } from "../../../module/action/board";

const ApplyPostItem: FC<PostItem> = ({
  title,
  idea,
  id,
  img,
  userImg,
  userNickname,
  postSkillsets
}) => {
  const dispatch = useDispatch();
  const cancelApply = useCallback(() => {
    dispatch(boardActionCreater.cancelApplySaga(id));
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
            <S.Button onClick={cancelApply}>취소 하기</S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ApplyPostItem;
