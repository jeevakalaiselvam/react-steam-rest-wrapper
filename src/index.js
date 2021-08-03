import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGames from "./pages/AllGames/AllGames";
import "./index.scss";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

console.clear();

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route path='/allgames'>
        <AllGames />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
