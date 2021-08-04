import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllGames from "./pages/AllGames";
import "./index.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import AchievementsHistory from "./pages/AchievementsHistory";
import AllAchievements from "./pages/AllAchievements";
import Milestones from "./pages/Milestones";
import styled from "styled-components";

console.clear();

const HeaderSmallDevices = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
`;

ReactDOM.render(
  <Router>
    <HeaderSmallDevices>
      <Header />
    </HeaderSmallDevices>
    <Switch>
      <Route exact path='/'>
        <MainContent>
          <SidebarBigDevices>
            <Sidebar />
          </SidebarBigDevices>
          <Homepage />
        </MainContent>
      </Route>
      <Route path='/all-games'>
        <AllGames />
      </Route>
      <Route path='/all-achievements'>
        <AllAchievements />
      </Route>
      <Route path='/achievements-history'>
        <AchievementsHistory />
      </Route>
      <Route path='/milestones'>
        <Milestones />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
