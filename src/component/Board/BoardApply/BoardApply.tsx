import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import ApplyPostList from "../../Post/PostList/ApplyPostList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardApply: FC = () => {
  const list = useSelector((store: StoreType) => store.board.boardApply.list);
  return (
    <div>
      <BoardHeader activeIndex={1} />
      <ApplyPostList data={list} />
    </div>
  );
};

export default BoardApply;
