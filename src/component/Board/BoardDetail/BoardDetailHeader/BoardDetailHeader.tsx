import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getImgSrc } from "../../../../lib/func";
import { StoreType } from "../../../../module/reducer";
import * as S from "../styles";

const BoardDetailHeader: FC = () => {
  const { title, userNickname, userImg } = useSelector(
    (store: StoreType) => store.board.detail
  );
  return (
    <S.BoardDetailHeader>
      <S.ProjectName>{title}</S.ProjectName>
      <S.ProfileWrap>
        <S.ProfileImg src={getImgSrc(userImg)} />
        <S.ProfileName>{userNickname}</S.ProfileName>
      </S.ProfileWrap>
    </S.BoardDetailHeader>
  );
};

export default BoardDetailHeader;
