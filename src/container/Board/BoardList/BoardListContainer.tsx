import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoardList } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardListContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boardActionCreater.resetBoard());
    dispatch(boardActionCreater.getBoardListSaga());
  }, []);
  return <BoardList />;
};

export default BoardListContainer;
