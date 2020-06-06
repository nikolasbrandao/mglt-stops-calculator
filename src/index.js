import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyles";
import { theme } from "./assets/Theme";
import App from "./routes/routes";
import Header from "./components/Header";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
