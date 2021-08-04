import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import styled from "styled-components";
import AppContainer from "./AppContainer";

console.clear();

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById("root")
);
