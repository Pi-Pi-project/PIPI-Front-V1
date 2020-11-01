import React, { FC } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { passwordActionCreater } from "../../../module/action/password";
import { StoreType } from "../../../module/reducer";
import * as S from "../styles";

const FindPasswordFormFooter: FC = () => {
  const dispatch = useDispatch();
  const step = useSelector((store: StoreType) => store.password.step);
  const findEmail = useCallback(() => {
    dispatch(passwordActionCreater.findEmailSaga());
  }, []);
  return (
    <S.FindPasswordFooter>
      {step === "CHECK_EMAIL" ? (
        <S.FindPasswordSubmitBtn onClick={findEmail}>
          보내기
        </S.FindPasswordSubmitBtn>
      ) : (
        ""
      )}
    </S.FindPasswordFooter>
  );
};

export default FindPasswordFormFooter;
