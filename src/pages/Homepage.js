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
    sidebarOpen && console.log("NAV CLOSED");
    !sidebarOpen && console.log("NAV OPENED");
    setSidebarOpen((oldSidebar) => !oldSidebar);
  };

  const sidebarItemClicked = () => {
    console.log("NAV ITEM CLICKED");
    setSidebarOpen((oldSidebar) => false);
  };

  return (
    <>
      <Header toggleNav={toggleNav} sidebarOpen={sidebarOpen} />
      <MainContainer>
        <Sidebar
          sidebarOpen={sidebarOpen}
          sidebarItemClicked={sidebarItemClicked}
        />
        <ContentContainer>Homepage</ContentContainer>
      </MainContainer>
    </>
  );
}
