import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGames from "./pages/AllGames/AllGames";
import RecentAchievements from "./pages/RecentAchievements/RecentAchievements";
import "./index.scss";
import Header from "./components/header/Header";

console.clear();

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path='/'>
        <AllGames />
      </Route>
      <Route path='/recentachivements'>
        <RecentAchievements />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
