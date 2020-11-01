import React, { FC, useCallback, KeyboardEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkEnterKeyCode } from "../../../lib/func";
import { passwordActionCreater } from "../../../module/action/password";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const FindPasswordFormBody: FC = () => {
  const dispatch = useDispatch();
  const step = useSelector((store: StoreType) => store.password.step);
  const email = useSelector((store: StoreType) => store.password.email);

  const keyDownHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (checkEnterKeyCode(e.key))
      dispatch(passwordActionCreater.findEmailSaga());
  }, []);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(passwordActionCreater.updateInput({ name, value }));
  }, []);
  return (
    <S.FindPasswordBody>
      {step === "CHECK_EMAIL" ? (
        <div>
          <S.FindPasswordP>
            찾으려는 계정의 이메일을 입력해 주세요!
          </S.FindPasswordP>
          <S.FindPasswordInput
            onChange={changeHandler}
            type="email"
            name="email"
            value={email}
            onKeyDown={keyDownHandler}
            placeholder="이메일"
          />
        </div>
      ) : step === "AUTH_CHECK_CODE" ? (
        <div>
          <S.FindPasswordInput type="password" placeholder="비밀번호" />
          <S.FindPasswordInput type="password" placeholder="비밀번호 재입력" />
        </div>
      ) : (
        ""
      )}
    </S.FindPasswordBody>
  );
};

export default FindPasswordFormBody;
