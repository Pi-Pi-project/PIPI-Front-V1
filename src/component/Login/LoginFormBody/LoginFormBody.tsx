import React, { ChangeEvent, FC, useCallback, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkEnterKeyCode } from "../../../lib/func";
import { loginActionCreater } from "../../../module/action/login";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const LoginFormBody: FC = () => {
  const dispatch = useDispatch();
  const { id, password } = useSelector((store: StoreType) => store.login);

  const keyDownHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (checkEnterKeyCode(e.key))
      dispatch(loginActionCreater.requestLoginSaga());
  }, []);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      loginActionCreater.inputUpdate({
        name,
        value
      })
    );
  }, []);
  return (
    <S.LoginBody>
      <div>
        <S.LoginInput
          value={id}
          onKeyDown={keyDownHandler}
          onChange={changeHandler}
          name="id"
          type="email"
          placeholder="이메일"
        />
        <S.LoginInput
          value={password}
          onKeyDown={keyDownHandler}
          onChange={changeHandler}
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <S.ForgotPassword>
          <Link to="/password">비밀번호를 잊어버리셨나요?</Link>
        </S.ForgotPassword>
      </div>
    </S.LoginBody>
  );
};

export default LoginFormBody;
