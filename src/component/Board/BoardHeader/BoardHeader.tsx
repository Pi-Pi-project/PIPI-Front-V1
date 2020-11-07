import React, { ChangeEvent, FC, useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { magnifyingIconSvg } from "../../../asset";
import { boardActionCreater } from "../../../module/action/board";
import { LoginedContainer } from "../../../style/GlobalStyle";
import BoardSearchModal from "../BoardModal/BoardSearchModal";
import * as S from "./styles";

interface Props {
  activeIndex: number;
}

const BoardHeader: FC<Props> = ({ activeIndex }) => {
  const dispatch = useDispatch();
  const openSearchModal = useCallback(() => {
    dispatch(boardActionCreater.changeSearchModal(true));
  }, []);
  return (
    <S.Container>
      <LoginedContainer>
        <div>
          <S.HrefButton to="/board/list" isActive={activeIndex === 0}>
            공고 게시판
          </S.HrefButton>
          <S.HrefButton to="/board/apply" isActive={activeIndex === 1}>
            신청 목록
          </S.HrefButton>
          <S.HrefButton to="/board/mine" isActive={activeIndex === 2}>
            마이 프로젝트
          </S.HrefButton>
          <S.HrefButton to="/board/write" isActive={activeIndex === 3}>
            공고문 쓰기
          </S.HrefButton>
        </div>
        <S.InputWrap>
          <input type="text" onClick={openSearchModal} />
          <img src={magnifyingIconSvg} />
        </S.InputWrap>
      </LoginedContainer>
      <BoardSearchModal />
    </S.Container>
  );
};

export default BoardHeader;
