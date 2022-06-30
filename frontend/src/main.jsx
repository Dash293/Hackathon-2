import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
