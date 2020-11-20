import React, { FC } from "react";
import { LoginedContainer } from "../../../style/GlobalStyle";
import AdminItem from "../AdminItem/AdminItem";
import * as S from "./styles";

const AdminMain: FC = () => {
  return (
    <S.Container>
      <S.AdminHeader>
        <LoginedContainer>
          <div>
            <S.ProjectName color="#53AF9E">PiPi</S.ProjectName>
            <S.ProjectName color="#3b3b3b"> ADMIN</S.ProjectName>
          </div>
          <div>
            <S.Button>로그아웃</S.Button>
          </div>
        </LoginedContainer>
      </S.AdminHeader>
      <S.Main>
        <S.Half>
          <S.Title>Report Log</S.Title>
          <S.ListWrap>
            <AdminItem></AdminItem>
          </S.ListWrap>
        </S.Half>
        <S.Half>
          <S.Title>Application for Completion Log</S.Title>
          <S.ListWrap>
            <AdminItem></AdminItem>
          </S.ListWrap>
        </S.Half>
      </S.Main>
    </S.Container>
  );
};

export default AdminMain;
