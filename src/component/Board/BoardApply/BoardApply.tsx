import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import ApplyPostList from "../../Post/PostList/ApplyPostList";
import NoneList from "../../Post/PostList/NoneList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardApply: FC = () => {
  const { list, isLoading } = useSelector(
    (store: StoreType) => store.board.boardApply
  );
  return (
    <div>
      <BoardHeader activeIndex={3} />
      {isLoading ? (
        list.length ? (
          <ApplyPostList data={list} />
        ) : (
          <NoneList />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default BoardApply;
