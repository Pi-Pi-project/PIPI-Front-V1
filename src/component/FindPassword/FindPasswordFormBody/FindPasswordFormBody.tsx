import React, { FC } from "react";
import * as S from "../styles";

const FindPasswordFormBody: FC = () => {
  return (
    <S.FindPasswordBody>
      <div>
        <S.FindPasswordInput type="password" placeholder="비밀번호" />
        <S.FindPasswordInput type="password" placeholder="비밀번호 재입력" />
      </div>
    </S.FindPasswordBody>
  );
};

export default FindPasswordFormBody;
