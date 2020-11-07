import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoardMine } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardMineContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boardActionCreater.resetBoard());
    dispatch(boardActionCreater.getBoardDoingSaga());
    dispatch(boardActionCreater.getBoardWantedSaga());
  }, []);
  return <BoardMine />;
};

export default BoardMineContainer;
