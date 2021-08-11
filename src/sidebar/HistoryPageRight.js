import React from "react";
import styled from "styled-components";
import AchievementNormal from "../components/card/AchievementNormal";
import AchievementSidebarNormal from "../components/card/AchievementSidebarNormal";
import AchievementSidebar from "../components/card/AchievementSidebarNormal";

const AchievementContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
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
