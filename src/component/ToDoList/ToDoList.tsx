import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { managementActionCreater } from "../../module/action/management";
import { TodoItem } from "../../module/reducer/management";
import * as S from "./styles";
import ToDoItem from "./ToDoItem/ToDoItem";

interface Props {
  todos: TodoItem[];
}

const ToDoList: FC<Props> = ({ todos }) => {
  const dispatch = useDispatch();
  const addTodo = useCallback(() => {
    const todo = prompt("할일을 입력하세요");
    if (!todo) return;
    dispatch(managementActionCreater.addTodoSaga(todo));
  }, []);
  return (
    <S.Container>
      <S.Header>To Do List</S.Header>
      <S.ToDoListDiv>
        {todos.map(({ date, id, nickname, todo, todoStatus }) => (
          <ToDoItem
            key={id}
            todo={todo}
            date={date}
            id={id}
            nickname={nickname}
            todoStatus={todoStatus}
          />
        ))}
      </S.ToDoListDiv>
      <S.ToDoBottom>
        <S.AddButton onClick={addTodo}>추가 하기</S.AddButton>
      </S.ToDoBottom>
    </S.Container>
  );
};

export default ToDoList;
