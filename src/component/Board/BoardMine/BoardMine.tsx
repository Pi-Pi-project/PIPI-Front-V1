import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import MinePostList from "../../Post/PostList/MinePostList";
import NoneList from "../../Post/PostList/NoneList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardMine: FC = () => {
  const { list, isLoading } = useSelector(
    (store: StoreType) => store.board.boardDoing
  );
  return (
    <div>
      <BoardHeader activeIndex={1} />
      {isLoading ? (
        list.length ? (
          <MinePostList data={list} />
        ) : (
          <NoneList />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default BoardMine;
