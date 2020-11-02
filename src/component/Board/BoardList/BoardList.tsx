import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import ViewPostList from "../../Post/PostList/ViewPostList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardList: FC = () => {
  const { isLoading, list } = useSelector(
    (store: StoreType) => store.board.boardList
  );
  return (
    <div>
      <BoardHeader activeIndex={0} />
      {isLoading && <ViewPostList data={list} />}
    </div>
  );
};

export default BoardList;
