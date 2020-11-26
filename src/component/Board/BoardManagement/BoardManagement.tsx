import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../../module/reducer";
import ManagementPostList from "../../Post/PostList/ManagementPostList";
import NoneList from "../../Post/PostList/NoneList";
import BoardHeader from "../BoardHeader/BoardHeader";

const BoardManagement: FC = () => {
  const data = useSelector((store: StoreType) => store.board.project);
  return (
    <div>
      <BoardHeader activeIndex={2} />
      {data.length ? <ManagementPostList data={data} /> : <NoneList />}
    </div>
  );
};

export default BoardManagement;
