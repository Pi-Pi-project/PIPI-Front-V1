import React, { FC } from "react";
import FindPasswordFormBody from "../FindPasswordFormBody/FindPasswordFormBody";
import FindPasswordFormFooter from "../FindPasswordFormFooter/FindPasswordFormFooter";
import FindPasswordFormHeader from "../FindPasswordFormHeader/FindPasswordFormHeader";
import * as S from "../styles";

const FindPasswordRight: FC = () => {
  return (
    <S.FindPasswordRightDiv>
      <FindPasswordFormHeader />
      <FindPasswordFormBody />
      <FindPasswordFormFooter />
    </S.FindPasswordRightDiv>
  );
};

export default FindPasswordRight;
