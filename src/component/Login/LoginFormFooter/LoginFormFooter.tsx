import React, { FC } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginActionCreater } from "../../../module/action/login";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const LoginFormFooter: FC = () => {
  const dispatch = useDispatch();
  const requestLogin = useCallback(() => {
    dispatch(loginActionCreater.requestLoginSaga());
  }, []);
  return (
    <S.LoginFooter>
      <S.LoginButton onClick={requestLogin}>로그인</S.LoginButton>
      <S.ForgotPassword>
        <Link to="/register">계정이 아직 없으신가요?</Link>
      </S.ForgotPassword>
    </S.LoginFooter>
  );
};

export default LoginFormFooter;
