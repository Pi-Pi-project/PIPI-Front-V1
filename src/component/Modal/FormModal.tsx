import React, { FC } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionCreater } from "../../module/action/modal";
import { StoreType } from "../../module/reducer";
import * as S from "./styles";

const FormModal: FC = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { isOpen, subTitle, title } = useSelector(
    (store: StoreType) => store.modal.formModal
  );

  useEffect(() => {
    ref.current && ref.current.focus();
  }, [isOpen]);

  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch(modalActionCreater.formModalOff());
  }, []);
  return (
    isOpen && (
      <S.Container>
        <S.Modal>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.OkBtn ref={ref} onClick={closeModal}>
            확인
          </S.OkBtn>
        </S.Modal>
      </S.Container>
    )
  );
};

export default FormModal;
