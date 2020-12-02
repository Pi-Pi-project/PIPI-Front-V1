import React, { FC, useCallback, useRef, MouseEvent, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActionCreater } from "../../module/action/modal";
import { StoreType } from "../../module/reducer";
import * as S from "./styles";

const ApplyDetailModal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, reason, type, title, giturl, introduce } = useSelector(
    (store: StoreType) => store.modal.applyDetailModal
  );
  const bakgroundRef = useRef<HTMLDivElement>();
  const isReport = useMemo(() => type === "REPORT", [type]);
  const closeModal = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget)
      dispatch(modalActionCreater.applyDetailModalOff());
  }, []);

  return (
    isOpen && (
      <S.Container ref={bakgroundRef} onClick={closeModal}>
        <S.Modal>
          {isReport ? (
            <S.Title>{reason}</S.Title>
          ) : (
            <>
              <S.Title>제목 : {title}</S.Title>
              <S.Title>git : {giturl}</S.Title>
              <S.Title>설명 : {introduce}</S.Title>
            </>
          )}
        </S.Modal>
      </S.Container>
    )
  );
};

export default ApplyDetailModal;
