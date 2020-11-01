import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

interface FindPasswordHeaderText {
  [key: string]: string;
}
const headerText: FindPasswordHeaderText = {
  CHECK_EMAIL: "Forget the password?"
};

const FindPasswordFormHeader: FC = () => {
  const step = useSelector((store: StoreType) => store.password.step);
  return (
    <S.FindPasswordFormHeader>
      <S.FindPasswordTitle>PiPi</S.FindPasswordTitle>
      <S.FindPasswordSubTitle>{headerText[step]}</S.FindPasswordSubTitle>
    </S.FindPasswordFormHeader>
  );
};

export default FindPasswordFormHeader;
