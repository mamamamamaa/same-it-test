import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./components/App";
import { persistor, store } from "./redux/store";

import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
