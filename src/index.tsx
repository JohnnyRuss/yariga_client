import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import store from "store/store";
import { Provider } from "react-redux";

import "styles/index.css";
import MuiTheme from "styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
