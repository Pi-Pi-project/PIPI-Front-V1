import React, { FC } from "react";
import * as S from "../styles";

const LoginFormHeader: FC = () => {
  return (
    <S.LoginHeader>
      <S.LoginTitle>LOGIN</S.LoginTitle>
      <S.LoginSubTitle>Welcome to PiPi!</S.LoginSubTitle>
    </S.LoginHeader>
  );
};

export default LoginFormHeader;
