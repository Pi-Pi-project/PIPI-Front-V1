import React, { FC } from "react";
import { ChangeEvent } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeActionCreater } from "../../../../module/action/write";
import { StoreType } from "../../../../module/reducer";
import * as S from "./styles";

const BoardWriteDeailIntroduce: FC = () => {
  const dispatch = useDispatch();
  const detail = useSelector((store: StoreType) => store.write.detail);

  const changeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(writeActionCreater.inputUpdate({ name, value }));
  }, []);

  const subMit = useCallback(() => {
    dispatch(writeActionCreater.uploadPostSaga());
  }, []);
  return (
    <S.Container>
      <S.IntroduceInput
        onChange={changeHandler}
        name="detail"
        placeholder="*상세 소개&#13;&#10;Ex) 우대사항, 프로젝트 특이사항"
        value={detail}
      ></S.IntroduceInput>
      <S.WriteButton onClick={subMit}>공고 올리기</S.WriteButton>
    </S.Container>
  );
};

export default BoardWriteDeailIntroduce;
