import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store, { persistore } from "store/store";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import ServerHealthProvider from "providers/ServerHealthProvider";

import "styles/index.css";
import MuiTheme from "styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";

import AppProvider from "providers/AppProvider";
import IOProvider from "providers/IOProvider";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <HelmetProvider>
            <ServerHealthProvider>
              <AppProvider>
                <IOProvider>
                  <App />
                </IOProvider>
              </AppProvider>
            </ServerHealthProvider>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
