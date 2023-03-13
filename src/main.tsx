import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./components/App";
import { persistor, store } from "./redux/store";

import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter basename="/pages">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </HashRouter>
);
