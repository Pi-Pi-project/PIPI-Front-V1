import React, { FC } from "react";
import { formBannerJpg } from "../../../asset";
import * as S from "../../Form/styles";

const FormLeft: FC = () => {
  return (
    <S.FormLeftDivBasic>
      <div>
        <img src={formBannerJpg} />
      </div>
    </S.FormLeftDivBasic>
  );
};

export default FormLeft;
