import React, { FC } from "react";
import { formBannerJpg } from "../../../asset";
import * as S from "../../Form/styles";

const FormLeft: FC = () => {
  return (
    <S.LoginLeftDiv>
      <div>
        <img src={formBannerJpg} />
      </div>
    </S.LoginLeftDiv>
  );
};

export default FormLeft;
