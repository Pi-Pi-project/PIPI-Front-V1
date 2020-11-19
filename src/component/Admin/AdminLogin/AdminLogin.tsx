import React, { FC } from "react";
import * as S from "./styles";

const AdminLogin: FC = () => {
  return (
    <S.Container>
      <S.LoginWrap>
        <div>
          <S.BigTitle>PiPi</S.BigTitle>
          <S.Title>ADMIN</S.Title>
        </div>
        <S.InputWrap>
          <S.Input placeholder="이메일" type="email" />
          <S.Input placeholder="비밀번호" type="password" />
        </S.InputWrap>
        <div>
          <S.Button>로그인</S.Button>
        </div>
      </S.LoginWrap>
    </S.Container>
  );
};

export default AdminLogin;
