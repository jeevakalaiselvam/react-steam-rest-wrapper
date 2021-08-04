import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import styled from "styled-components";
import Homepage from "./pages/Homepage";

console.clear();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
