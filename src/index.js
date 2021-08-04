import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import styled from "styled-components";
import HeaderSmall from "./components/header/HeaderSmall";

console.clear();

const HeaderSmallContainer = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
`;

const HeaderLargeContainer = styled.div`
  @media (min-width: 769px) {
    display: block;
  }
  display: none;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: -100%;
  top: 0;

  @media (min-width: 769px) {
    display: block;
    position: relative;
    top: 0;
    left: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

ReactDOM.render(
  <Router>
    <HeaderSmallContainer>
      <HeaderSmall />
    </HeaderSmallContainer>
    <HeaderLargeContainer>HeaderLarge</HeaderLargeContainer>
    <MainContainer>
      <SidebarContainer>Sidebar</SidebarContainer>
      <ContentContainer>Content</ContentContainer>
    </MainContainer>
  </Router>,
  document.getElementById("root")
);
