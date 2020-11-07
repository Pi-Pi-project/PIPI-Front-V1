import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoardApply } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardApplyContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boardActionCreater.resetBoard());
    dispatch(boardActionCreater.getBoardApplySaga());
  }, []);
  return <BoardApply />;
};

export default BoardApplyContainer;
