import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import SearchPostList from "../../Post/PostList/SearchPostList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardSearch: FC = () => {
  const { isLoading, list } = useSelector(
    (store: StoreType) => store.board.boardSearch
  );
  return (
    <div>
      <BoardHeader activeIndex={0} />
      {isLoading && <SearchPostList data={list} />}
    </div>
  );
};

export default BoardSearch;
