import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import styled from "styled-components";

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

  @media (max-width: 769px) {
    margin-top: 60px;
  }
`;

export default function Page(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleNav = () => {
    setSidebarOpen((oldSidebar) => !oldSidebar);
  };

  const sidebarItemClicked = () => {
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
