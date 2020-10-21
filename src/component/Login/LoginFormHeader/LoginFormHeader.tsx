import React, { FC } from "react";
import * as S from "../../Form/styles";

const LoginFormHeader: FC = () => {
  return (
    <S.LoginHeader>
      <S.LoginTitle>LOGIN</S.LoginTitle>
      <S.SubTitle>Welcome to PiPi!</S.SubTitle>
    </S.LoginHeader>
  );
};

export default LoginFormHeader;
