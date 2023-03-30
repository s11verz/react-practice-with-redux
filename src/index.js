import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./hooks-store/products-store";

configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
