import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { todoSuccessSvg } from "../../../asset";
import { managementActionCreater } from "../../../module/action/management";
import { TodoItem } from "../../../module/reducer/management";
import * as S from "../styles";

const ToDoItem: FC<TodoItem> = ({ date, id, todoStatus, todo, nickname }) => {
  const dispatch = useDispatch();
  const isFinish: boolean = todoStatus === "CHECK";

  const clickHandler = useCallback(() => {
    if (!isFinish) {
      dispatch(managementActionCreater.checkTodoSaga(id));
    }
  }, [todoStatus]);

  return (
    <S.ToDoItemDiv>
      <div>
        <S.TodoWriterWrap>
          <S.Circle isActive={isFinish} />
          <S.ToDoItemName>{nickname}</S.ToDoItemName>
        </S.TodoWriterWrap>
        <S.ToDoButtonWrap>
          <S.ToDoButton onClick={clickHandler} src={todoSuccessSvg} />
        </S.ToDoButtonWrap>
      </div>
      <div>
        <S.TodoItemContent isActive={isFinish}>{todo}</S.TodoItemContent>
      </div>
    </S.ToDoItemDiv>
  );
};

export default ToDoItem;
