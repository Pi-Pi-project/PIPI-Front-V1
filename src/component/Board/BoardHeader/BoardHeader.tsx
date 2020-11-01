import React, { FC } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { magnifyingIconSvg } from "../../../asset";
import { LoginedContainer } from "../../../style/GlobalStyle";
import * as S from "./styles";

interface Props {
  activeIndex: number;
}

const BoardHeader: FC<Props> = ({ activeIndex }) => {
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
          <S.HrefButton to="/board/my" isActive={activeIndex === 2}>
            마이 프로젝트
          </S.HrefButton>
          <S.HrefButton to="/board/write" isActive={activeIndex === 3}>
            공고문 쓰기
          </S.HrefButton>
        </div>
        <S.InputWrap>
          <input />
          <img src={magnifyingIconSvg} />
        </S.InputWrap>
      </LoginedContainer>
    </S.Container>
  );
};

export default BoardHeader;
