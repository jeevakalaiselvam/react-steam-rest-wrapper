import React from "react";
import styled from "styled-components";
import AchievementNormal from "../components/card/AchievementNormal";
import AchievementSidebarNormal from "../components/card/AchievementSidebarNormal";
import AchievementSidebar from "../components/card/AchievementSidebarNormal";

const AchievementContainer = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 4rem;
  justify-content: flex-start;
`;

export default function MilestoneRightPage(props) {
  return <AchievementContainer>Milestone Right</AchievementContainer>;
}
