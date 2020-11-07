import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { BASE_IMG_URL } from "../../../lib/api";
import { boardActionCreater } from "../../../module/action/board";
import { ApplyUser } from "../../../module/reducer/board";
import * as S from "./styles";

const ApplyUserItem: FC<ApplyUser> = ({ userNickname, userImg, userEmail }) => {
  const dispatch = useDispatch();
  const rejectApply = useCallback(() => {
    dispatch(
      boardActionCreater.rejectApplySaga({
        userEmail,
        userNickname
      })
    );
  }, []);

  const acceptApply = useCallback(() => {
    dispatch(
      boardActionCreater.acceptApplySaga({
        userNickname,
        userEmail
      })
    );
  }, []);
  return (
    <S.Container>
      <S.UserProfileWrap>
        <S.UsetImgCircle src={`${BASE_IMG_URL}/${userImg}`} />
        <S.UserTextWrap>
          <S.UserName>{userNickname}</S.UserName>
          <S.UserEmail>{userEmail}</S.UserEmail>
        </S.UserTextWrap>
      </S.UserProfileWrap>
      <S.ButtonBoxWrap>
        <S.Button>채팅</S.Button>
        <S.Button onClick={acceptApply}>수락</S.Button>
        <S.Button onClick={rejectApply}>거절</S.Button>
      </S.ButtonBoxWrap>
    </S.Container>
  );
};

export default ApplyUserItem;
