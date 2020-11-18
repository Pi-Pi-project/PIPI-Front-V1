import React, { FC } from "react";
import { Calander, ToDoList } from "../../";
import * as S from "../styles";

const ManagementBody: FC = () => {
  return (
    <S.ManagementBody>
      <Calander />
    </S.ManagementBody>
  );
};

export default ManagementBody;
