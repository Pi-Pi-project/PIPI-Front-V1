import React, { FC } from "react";
import * as S from "./styles";
import { monsterSvg } from "../../../asset";

const NoneList: FC = () => {
  return (
    <S.NoneListDiv>
      <img src={monsterSvg} />
      <div>아무 것도 없어요!</div>
    </S.NoneListDiv>
  );
};

export default NoneList;
