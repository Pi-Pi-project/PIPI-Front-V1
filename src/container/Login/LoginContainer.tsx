import React, { FC } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Login } from "../../component";
import { checkIsLogin } from "../../lib/api";
import { StoreType } from "../../module/reducer";

const LoginContainer: FC = () => {
  const history = useHistory();
  const successLogin = useSelector(
    (store: StoreType) => store.login.successLogin
  );
  useEffect(() => {
    checkIsLogin().then(res => {
      res && history.push("/board/list");
    });
  }, []);

  useEffect(() => {
    successLogin && history.push("/board/list");
  }, [successLogin]);

  return <Login />;
};

export default LoginContainer;
