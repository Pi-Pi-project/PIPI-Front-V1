import React, { FC, useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { requestApiWithAccessToken } from "../../../lib/api";
import { getImgSrc } from "../../../lib/func";
import { boardActionCreater } from "../../../module/action/board";
import { ApplyUser } from "../../../module/reducer/board";
import * as S from "./styles";

const ACCEPTED = "ACCEPTED";
const DENIED = "DENIED";

const ApplyUserItem: FC<ApplyUser> = ({
  userNickname,
  userImg,
  userEmail,
  status
}) => {
  const [email, setEmail] = useState<string>("");
  const history = useHistory();
  const dispatch = useDispatch();

  const gotoProfile = useCallback(() => {
    history.push(`/profile?email=${userEmail}`);
  }, []);

  const gotoChat = useCallback(() => {
    requestApiWithAccessToken("get", `/chat?email=${userEmail}`).then(res => {
      const { roomId } = res.data;
      console.log(roomId);
      history.push(`/chat/${roomId}`);
    });
  }, [userEmail]);
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
        <S.UsetImgCircle onClick={gotoProfile} src={getImgSrc(userImg)} />
        <S.UserTextWrap>
          <S.UserName>{userNickname}</S.UserName>
          <S.UserEmail>{userEmail}</S.UserEmail>
        </S.UserTextWrap>
      </S.UserProfileWrap>
      <S.ButtonBoxWrap>
        <S.Button onClick={gotoChat}>채팅</S.Button>
        <S.Button isActive={status === ACCEPTED} onClick={acceptApply}>
          수락
        </S.Button>
        <S.Button isActive={status === DENIED} onClick={rejectApply}>
          거절
        </S.Button>
      </S.ButtonBoxWrap>
    </S.Container>
  );
};

export default ApplyUserItem;
