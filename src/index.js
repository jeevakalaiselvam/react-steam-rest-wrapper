import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

console.clear();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
