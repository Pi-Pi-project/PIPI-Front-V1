import React, { FC } from "react";
import * as S from "../../Form/styles";

const LoginFormFooter: FC = () => {
  return (
    <S.LoginFooter>
      <S.LoginButton>로그인</S.LoginButton>
      <S.ForgotPassword>
        <a>계정이 아직 없으신가요?</a>
      </S.ForgotPassword>
    </S.LoginFooter>
  );
};

export default LoginFormFooter;
