import styled, { css } from "styled-components";

export const Container = styled.div`
  color: #3b3b3b;
  display: flex;
  height: 670px;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 1px solid #3b3b3b;
`;

export const ToDoListDiv = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ToDoItemDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 5px 0;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const TodoWriterWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ToDoBottom = styled.div`
  margin-top: 20px;
`;

export const TodoItemContent = styled.div<{ isActive: boolean }>`
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 340px;
  transition: 0.25s all;

  ${props =>
    props.isActive &&
    css`
      text-decoration: line-through;
      color: #53af9e;
    `}
`;

export const ToDoItemName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Circle = styled.div<{ isActive: boolean }>`
  width: 7px;
  margin-right: 5px;
  height: 7px;
  border-radius: 50%;
  transition: 0.25s all;
  background-color: ${props => (props.isActive ? "#53AF9E" : "red")};
`;

export const ToDoButtonWrap = styled.div``;
export const ToDoButton = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 10px;
`;

export const AddButton = styled.div`
  padding: 10px;
  color: white;
  font-weight: bold;
  background-color: #53af9e;
  border-radius: 5px;
  transition: 0.25s all;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid #53af9e;
    color: #53af9e;
  }
`;
