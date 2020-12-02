import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteChildrenProps } from "react-router";
import { BoardProfile } from "../../component";
import { profileActionCreater } from "../../module/action/profile";
import querySring from "query-string";

const ProfileContainer: FC<RouteChildrenProps> = ({ location }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { email } = querySring.parse(location.search);
    dispatch(profileActionCreater.getProfileSaga(email as string));
    dispatch(profileActionCreater.getPortfolioSaga(email as string));
  }, []);
  return <BoardProfile />;
};

export default ProfileContainer;
