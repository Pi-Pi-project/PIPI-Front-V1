import React, { FC } from "react";
import * as S from "./styles";

interface ModalProps {
  title: string;
  subTitle: string;
}

const FormModal: FC<ModalProps> = ({ title, subTitle }) => {
  return (
    <S.Container>
      <S.Modal>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.OkBtn>확인</S.OkBtn>
      </S.Modal>
    </S.Container>
  );
};

export default FormModal;
