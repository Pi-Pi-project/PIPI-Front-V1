import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { boardActionCreater } from "../../../module/action/board";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";
import { useHistory } from "react-router";

const ApplyPostItem: FC<PostItem> = ({
  title,
  idea,
  id,
  img,
  userImg,
  userEmail,
  userNickname,
  postSkillsets
}) => {
  const history = useHistory();
  const gotoProfile = useCallback(() => {
    history.push(`/board/profile?email=${userEmail}`);
  }, [userEmail]);
  const dispatch = useDispatch();
  const cancelApply = useCallback(() => {
    dispatch(boardActionCreater.cancelApplySaga(id));
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
            <S.Button onClick={cancelApply}>취소 하기</S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default ApplyPostItem;
