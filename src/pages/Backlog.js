import React from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import BacklogContent from "../content/BacklogContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Backlog() {
  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<GamesPageRight />}
        content={<BacklogContent />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
      />
    </PageContainer>
  );
}
