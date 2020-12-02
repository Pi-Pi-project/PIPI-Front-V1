import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BoardManagement } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardManagementContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(boardActionCreater.getBoardManagementSaga());
  }, []);
  return <BoardManagement />;
};

export default BoardManagementContainer;
