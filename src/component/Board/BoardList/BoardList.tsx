import React, { FC } from "react";
import BoardHeader from "../BoardHeader/BoardHeader";
import ViewPostList from "../PostList/ViewPostList";

const BoardList: FC = () => {
  return (
    <div>
      <BoardHeader activeIndex={0} />
      <ViewPostList />
    </div>
  );
};

export default BoardList;
