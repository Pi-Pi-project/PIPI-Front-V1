import React, { ChangeEvent, FC, useCallback, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEnterKey } from "../../../lib/func";
import { adminLoginActionCreater } from "../../../module/action/adminLogin";
import { StoreType } from "../../../module/reducer";
import * as S from "./styles";

const AdminLogin: FC = () => {
  const dispatch = useDispatch();

  const { email, password } = useSelector(
    (store: StoreType) => store.adminLogin
  );
  const changeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(adminLoginActionCreater.changeInput({ name, value }));
  }, []);

  const requestRegister = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (checkEnterKey(e.key)) {
      dispatch(adminLoginActionCreater.requestLoginSaga());
    }
  }, []);

  const clickHandler = useCallback(() => {
    dispatch(adminLoginActionCreater.requestLoginSaga());
  }, []);
  return (
    <S.Container>
      <S.LoginWrap>
        <div>
          <S.BigTitle>PiPi</S.BigTitle>
          <S.Title>ADMIN</S.Title>
        </div>
        <S.InputWrap>
          <S.Input
            onKeyDown={requestRegister}
            onChange={changeInput}
            name="email"
            placeholder="이메일"
            type="email"
            value={email}
          />
          <S.Input
            onKeyDown={requestRegister}
            onChange={changeInput}
            name="password"
            placeholder="비밀번호"
            type="password"
            value={password}
          />
        </S.InputWrap>
        <div>
          <S.Button onClick={clickHandler}>로그인</S.Button>
        </div>
      </S.LoginWrap>
    </S.Container>
  );
};

export default AdminLogin;
