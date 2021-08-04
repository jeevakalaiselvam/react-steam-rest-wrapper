import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Homepage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleNav = () => {
    console.log("NAV TOGGLE");
    setSidebarOpen((oldSidebar) => !oldSidebar);
  };

  return (
    <>
      <Header toggleNav={toggleNav} />
      <MainContainer onClick={toggleNav}>
        <Sidebar sidebarOpen={sidebarOpen} />
        <ContentContainer>Games</ContentContainer>
      </MainContainer>
    </>
  );
}
