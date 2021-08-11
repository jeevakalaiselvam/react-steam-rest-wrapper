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
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  justify-content: center;
`;

export default function HistoryPageRight(props) {
  const achievements = props.achievements;
  return (
    <AchievementContainer>
      {achievements.length &&
        achievements.map((achievement) => (
          <AchievementSidebarNormal
            achievement={achievement}
            key={`${achievement.unlocked_time_desc}${achievement.id}`}
          />
        ))}
    </AchievementContainer>
  );
}
