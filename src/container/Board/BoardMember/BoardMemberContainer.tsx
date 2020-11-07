import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { BoardMember } from "../../../component";
import { boardActionCreater } from "../../../module/action/board";

const BoardMemberContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = match.params as any;
    dispatch(boardActionCreater.getPostApplyUserListSaga(id));
  }, []);
  return <BoardMember />;
};

export default BoardMemberContainer;
