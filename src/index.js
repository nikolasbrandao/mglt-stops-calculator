import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyles";
import App from "./routes/routes";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
