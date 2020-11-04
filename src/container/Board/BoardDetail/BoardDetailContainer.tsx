import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import { BoardDetail } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardDetailContainer: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id: number = parseInt((match.params as any).id);
    dispatch(boardActionCreater.getBoardDetailSaga(id));
  }, []);
  return <BoardDetail />;
};

export default BoardDetailContainer;
