import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
import GameCardMedium from "../components/group/GameCardMedium";
import Card from "../components/core/Card";
import GamesPageRightMenu from "../menu/GamesPageRightMenu";
import GameCardSmall from "../components/group/GameCardSmall";
import AchievementCardSmall from "../components/group/AchievementCardSmall";
import AchievementCardMedium from "../components/group/AchievementCardMedium";
import { getRecentlyUnlockedAllAchievements } from "../actions/achievementActions";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Games(props) {
  const { games, viewOptionAchievements, setViewOptionAchievements } =
    useContext(GamesContext);

  console.log("RENDERING ACHIEVEMENT PAGE");

  return (
    <>
      <Page
        title='All Games'
        rightMenuItem={<GamesPageRightMenu />}
        showRightMenu={true}
      >
        <PageContainer>
          {getRecentlyUnlockedAllAchievements(games).map((achievement) => {
            if (viewOptionAchievements === 0)
              return (
                <AchievementCardSmall
                  achievement={achievement}
                  key={achievement.id}
                />
              );
            else if (viewOptionAchievements === 1)
              return (
                <AchievementCardMedium
                  game={achievement}
                  key={achievement.id}
                />
              );
            else
              return (
                <AchievementCardMedium
                  game={achievement}
                  key={achievement.id}
                />
              );
          })}
        </PageContainer>
      </Page>
    </>
  );
}
