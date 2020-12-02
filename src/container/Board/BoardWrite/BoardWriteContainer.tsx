import React, { FC } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BoardWrtie } from "../../../component";
import { StoreType } from "../../../module/reducer";

const BoardWriteContainer: FC = () => {
  const history = useHistory();
  const success = useSelector((store: StoreType) => store.write.success);
  useEffect(() => {
    success && history.push("/board/list");
  }, [success]);
  return <BoardWrtie />;
};

export default BoardWriteContainer;
