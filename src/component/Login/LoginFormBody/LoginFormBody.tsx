import React, { FC } from "react";
import * as S from "../../Form/styles";

const LoginFormBody: FC = () => {
  return (
    <S.LoginBody>
      <div>
        <S.LoginInput type="text" placeholder="이메일" />
        <S.LoginInput type="password" placeholder="비밀번호" />
      </div>
      <S.ForgotPassword>
        <a>비밀번호를 잊어버리셨나요?</a>
      </S.ForgotPassword>
    </S.LoginBody>
  );
};

export default LoginFormBody;
