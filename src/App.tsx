import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { FindPasswordRouter, LoginRouter } from "./routing";
import { GlobalStyle } from "./style/GlobalStyle";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/login" component={LoginRouter} />
      <Route path="/password" component={FindPasswordRouter} />
    </BrowserRouter>
  );
};

export default App;
