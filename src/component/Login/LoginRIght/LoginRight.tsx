import React, { FC } from "react";
import * as S from "../styles";
import LoginFormBody from "../LoginFormBody/LoginFormBody";
import LoginFormFooter from "../LoginFormFooter/LoginFormFooter";
import LoginFormHeader from "../LoginFormHeader/LoginFormHeader";

const LoginRight: FC = () => {
  return (
    <S.LoginRightDiv>
      <LoginFormHeader />
      <LoginFormBody />
      <LoginFormFooter />
    </S.LoginRightDiv>
  );
};

export default LoginRight;
