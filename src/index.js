import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "./assets/GlobalStyles";
import { theme } from "./assets/Theme";
import App from "./routes/routes";
import Header from "./components/Header";
import { store, persistor } from "./redux/configureStore";

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </StoreProvider>,
  document.getElementById("root")
);
