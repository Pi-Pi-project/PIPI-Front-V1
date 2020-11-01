import React, { FC } from "react";
import FormLeft from "../Form/FormLeft/FormLeft";
import * as S from "../Form/styles";
import RegisterRight from "./RegisterRight/RegisterRight";

const Register: FC = () => {
  return (
    <S.Container>
      <FormLeft />
      <RegisterRight />
    </S.Container>
  );
};

export default Register;
