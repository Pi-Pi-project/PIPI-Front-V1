import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import MinePostList from "../../Post/PostList/MinePostList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardMine: FC = () => {
  const list = useSelector((store: StoreType) => store.board.boardDoing.list);
  return (
    <div>
      <BoardHeader activeIndex={2} />
      <MinePostList data={list} />
    </div>
  );
};

export default BoardMine;
