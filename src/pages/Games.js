import React from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import GamesPageLeft from "../sidebar/GamesPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";

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
        leftSidebar={<GamesPageLeft />}
        rightSidebar={<GamesPageRight />}
        content={"All Games"}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
      />
    </PageContainer>
  );
}
