import React, { FC } from "react";
import FormLeft from "../Form/FormLeft/FormLeft";
import LoginRight from "./LoginRIght/LoginRight";
import * as S from "../Form/styles";

const Login: FC = () => {
  return (
    <S.Container>
      <FormLeft />
      <LoginRight />
    </S.Container>
  );
};

export default Login;
