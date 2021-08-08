import React from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import AchievementsContent from "../content/AchievementsContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Achievements() {
  return (
    <PageContainer>
      <Header games={{}} />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<GamesPageRight />}
        content={<AchievementsContent />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
      />
    </PageContainer>
  );
}
