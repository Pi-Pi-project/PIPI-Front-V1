import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { Management } from "../../component";
import { managementActionCreater } from "../../module/action/management";

const ManagementContainer: FC<RouteChildrenProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = match.params as any;
    dispatch(managementActionCreater.setId(Number(id)));
  }, []);
  return <Management />;
};

export default ManagementContainer;
