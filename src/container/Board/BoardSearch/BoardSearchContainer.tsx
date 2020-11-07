import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { BoardSearch } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardSearchContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { category } = match.params as any;
    dispatch(boardActionCreater.resetBoard());
    dispatch(boardActionCreater.getBoardSearchSaga(category));
  });
  return <BoardSearch />;
};

export default BoardSearchContainer;
