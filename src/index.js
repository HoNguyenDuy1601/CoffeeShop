import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./style.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer></ToastContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
