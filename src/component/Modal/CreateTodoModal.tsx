import React, { FC, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managementActionCreater } from "../../module/action/management";
import { modalActionCreater } from "../../module/action/modal";
import { StoreType } from "../../module/reducer";
import * as S from "./styles";

const CreateTodoModal: FC = () => {
  const dispatch = useDispatch();
  const { content, isOpen } = useSelector(
    (store: StoreType) => store.modal.addTodoModal
  );

  const addTodo = useCallback(() => {
    dispatch(managementActionCreater.addTodoSaga(content));
  }, [content]);

  const changeInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(modalActionCreater.addTodoModalChangeContent(e.target.value));
  }, []);

  const closeModal = useCallback(() => {
    dispatch(modalActionCreater.addTodoModalOff());
  }, []);
  return (
    isOpen && (
      <S.Container>
        <S.Modal>
          <S.Title>Add To do list</S.Title>
          <S.TextArea
            onChange={changeInput}
            value={content}
            style={{ borderTop: "1px solid black" }}
            placeholder="투두리스트 내용"
          ></S.TextArea>
          <S.SuccessBtnWrap>
            <S.SuccessProjectBtn onClick={addTodo}>확인</S.SuccessProjectBtn>
            <S.SuccessProjectBtn onClick={closeModal}>취소</S.SuccessProjectBtn>
          </S.SuccessBtnWrap>
        </S.Modal>
      </S.Container>
    )
  );
};

export default CreateTodoModal;
