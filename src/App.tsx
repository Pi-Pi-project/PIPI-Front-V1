import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./component";
import { GlobalStyle } from "./style/GlobalStyle";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;
