import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerActionCreater } from "../../../module/action/register";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const RegisterFormFooter: FC = () => {
  const step = useSelector((store: StoreType) => store.register.step);
  const dispatch = useDispatch();
  const checkEmail = useCallback(() => {
    dispatch(registerActionCreater.checkEmailSaga());
  }, []);

  const checkCode = useCallback(() => {
    dispatch(registerActionCreater.checkCodeSaga());
  }, []);

  const requestRegister = useCallback(() => {
    dispatch(registerActionCreater.requestRegisterSaga());
  }, []);

  return (
    <S.RegisterFormFooter>
      {step === "CHECK_EMAIL" ? (
        <S.RegisterSubmitBtn onClick={checkEmail}>보내기</S.RegisterSubmitBtn>
      ) : step === "CHECK_CODE" ? (
        <S.RegisterSubmitBtn onClick={checkCode}>인증</S.RegisterSubmitBtn>
      ) : step === "SET_USER_INFO" ? (
        <S.RegisterSubmitBtn onClick={requestRegister}>
          확인
        </S.RegisterSubmitBtn>
      ) : (
        step === "SET_USER_PROFILE" && (
          <S.RegisterSubmitBtn>확인</S.RegisterSubmitBtn>
        )
      )}
    </S.RegisterFormFooter>
  );
};

export default RegisterFormFooter;
