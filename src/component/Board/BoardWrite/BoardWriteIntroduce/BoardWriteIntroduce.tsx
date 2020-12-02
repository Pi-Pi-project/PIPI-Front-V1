import React, { FC } from "react";
import { ChangeEvent } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { writeActionCreater } from "../../../../module/action/write";
import * as S from "./styles";

const BoardWriteIntroduce: FC = () => {
  const dispatch = useDispatch();

  const changeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(writeActionCreater.inputUpdate({ name, value }));
  }, []);

  return (
    <S.IntroduceInput
      name="introduce"
      onChange={changeHandler}
      placeholder="*한 줄 소개"
    />
  );
};

export default BoardWriteIntroduce;
