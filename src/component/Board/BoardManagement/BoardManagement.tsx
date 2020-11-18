import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import ManagementPostList from "../../Post/PostList/ManagementPostList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardManagement: FC = () => {
  const data = useSelector((store: StoreType) => store.board.project);
  return (
    <div>
      <BoardHeader activeIndex={2} />
      <ManagementPostList data={data} />
    </div>
  );
};

export default BoardManagement;
