import React from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default function Games() {
  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={"Left Sidebar content"}
        rightSidebar={"Right Sidebar Content"}
        content={"All Games"}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        leftSidebarOpen={false}
      />
    </PageContainer>
  );
}
