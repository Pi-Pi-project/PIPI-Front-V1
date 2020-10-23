import React, { FC } from "react";
import * as S from "../../component/Form/styles";
import FormLeft from "../Form/FormLeft/FormLeft";
import FindPasswordRight from "./FindPasswordRight/FindPasswordRight";

const FindPassword: FC = () => {
  return (
    <S.Container>
      <FormLeft />
      <FindPasswordRight />
    </S.Container>
  );
};

export default FindPassword;
