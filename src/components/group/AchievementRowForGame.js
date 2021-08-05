import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getRecentAchievementsForGame } from "../../actions/achievementActions";
import AchievementIconSmall from "../base/AchievementIconSmall";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
`;

const AchievementIconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem 0;
  margin-right: 0.5rem;
  flex-direction: row;
  overflow: hidden;
`;

export default function AchievementRowForGame(props) {
  return (
    <Container>
      {getRecentAchievementsForGame(props.game)
        .slice(0, 6)
        .map((achievement) => {
          return (
            <AchievementIconWrapper>
              <AchievementIconSmall image={achievement.icon} key={uuidv4()} />
            </AchievementIconWrapper>
          );
        })}
    </Container>
  );
}
