import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 0.5rem;
  justify-content: flex-start;
`;

export default function Page(props) {
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
      <Header
        toggleNav={toggleNav}
        sidebarOpen={sidebarOpen}
        title={props.title}
      />
      <MainContainer>
        <Sidebar
          sidebarOpen={sidebarOpen}
          sidebarItemClicked={sidebarItemClicked}
        />
        <ContentContainer>{props.children}</ContentContainer>
      </MainContainer>
    </>
  );
}
