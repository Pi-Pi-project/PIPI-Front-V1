import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import * as S from "./styles";

const AdminMain: FC = () => {
  return (
    <S.Container>
      <S.AdminHeader>
        <LoginedContainer>
          <div>
            <S.ProjectName color="#53AF9E">PiPi</S.ProjectName>
            <S.ProjectName color="#3B3B3B"> ADMIN</S.ProjectName>
          </div>
          <div>
            <S.Button>로그아웃</S.Button>
          </div>
        </LoginedContainer>
      </S.AdminHeader>
      <S.Main>
        <S.Half>
          <S.Title>Report Log</S.Title>
          <S.ListWrap>dd</S.ListWrap>
        </S.Half>
        <S.Half>
          <S.Title>Application for Completion Log</S.Title>
          <S.ListWrap>dd</S.ListWrap>
        </S.Half>
      </S.Main>
    </S.Container>
  );
};

export default AdminMain;
