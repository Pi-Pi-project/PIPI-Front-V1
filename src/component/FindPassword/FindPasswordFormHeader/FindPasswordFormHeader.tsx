import React, { FC } from "react";
import * as S from "../styles";

const FindPasswordFormHeader: FC = () => {
  return (
    <S.FindPasswordFormHeader>
      <S.FindPasswordTitle>PiPi</S.FindPasswordTitle>
      <S.FindPasswordSubTitle>Resetting the password</S.FindPasswordSubTitle>
    </S.FindPasswordFormHeader>
  );
};

export default FindPasswordFormHeader;
