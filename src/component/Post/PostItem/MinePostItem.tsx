import React, { FC } from "react";
import { PostItem } from "../../../module/reducer/board";
import * as S from "./styles";
import { useHistory } from "react-router";
import { useCallback } from "react";
import { getImgSrc, getSkillImgSrc } from "../../../lib/func";
import { useDispatch } from "react-redux";
import { modalActionCreater } from "../../../module/action/modal";

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
  const dispatch = useDispatch();
  const makeProject = useCallback(() => {
    dispatch(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "프로젝트를 생성했습니다"
      })
    );
  }, []);

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
            <S.Button onClick={makeProject}>프로젝트 생성</S.Button>
            <S.Button onClick={clickHandler}>신청자 목록</S.Button>
          </S.ButtonWrap>
        </S.BottmWrap>
      </S.ProjectIntroduce>
    </S.Container>
  );
};

export default MinePostItem;
