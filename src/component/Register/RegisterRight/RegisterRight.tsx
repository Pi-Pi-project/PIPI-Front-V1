import React, { FC } from "react";
import RegisterFormBody from "../RegisterFormBody/RegisterFormBody";
import RegisterFormFooter from "../RegisterFormFooter/RegisterFormFooter";
import RegisterFormHeader from "../RegisterFormHeader/RegisterFormHeader";
import * as S from "../styles";

const RegisterRight: FC = () => {
  return (
    <S.RegisterRight>
      <RegisterFormHeader />
      <RegisterFormBody />
      <RegisterFormFooter />
    </S.RegisterRight>
  );
};

export default RegisterRight;
