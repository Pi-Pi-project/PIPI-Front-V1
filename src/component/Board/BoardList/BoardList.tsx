import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import NoneList from "../../Post/PostList/NoneList";
import ViewPostList from "../../Post/PostList/ViewPostList";
import BoardHeader from "../BoardHeader/BoardHeader";
import * as S from "./styles";

const BoardList: FC = () => {
  const { isLoading, list } = useSelector(
    (store: StoreType) => store.board.boardList
  );
  return (
    <S.Container>
      <BoardHeader activeIndex={0} />
      {isLoading ? (
        list.length ? (
          <ViewPostList data={list} />
        ) : (
          <NoneList />
        )
      ) : (
        ""
      )}
    </S.Container>
  );
};

export default BoardList;
