import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import { GamesContext } from "../context/GameContext";
import AchievementCardSmall from "../components/group/AchievementCardSmall";
import AchievementCardMedium from "../components/group/AchievementCardMedium";
import {
  getAllAchievementsSortedAZ,
  getAllAchievementsSortedZA,
  getRecentlyUnlockedAllAchievements,
} from "../actions/achievementActions";
import AchievementsPageRightMenu from "../menu/AchievementsPageRightMenu";
import MainLeftMenu from "../menu/MainLeftMenu";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default function Achievements(props) {
  const { games, viewOptionAchievements, sortOptionAchievements } =
    useContext(GamesContext);

  console.log("RENDERING ACHIEVEMENT PAGE");

  const getSortedAchievements = () => {
    let sortedAchievements = [];
    if (sortOptionAchievements === 0) {
      sortedAchievements = getRecentlyUnlockedAllAchievements(games);
    } else if (sortOptionAchievements === 1) {
      sortedAchievements = getAllAchievementsSortedAZ(games);
    } else if (sortOptionAchievements === 2) {
      sortedAchievements = getAllAchievementsSortedZA(games);
    } else {
      sortedAchievements = getRecentlyUnlockedAllAchievements(games);
    }

    console.log("SORTED ACHIEVEMENTS", sortedAchievements);
    return sortedAchievements;
  };

  return (
    <>
      <Page
        title='All Achievements'
        rightMenuItem={<AchievementsPageRightMenu />}
        leftMenuItem={<MainLeftMenu />}
        sidebarLeftWidth='250px'
        sidebarRightWidth='200px'
        sidebarRightVisible={true}
      >
        <PageContainer>
          {getSortedAchievements(games).map((achievement) => {
            if (viewOptionAchievements === 0)
              return (
                <AchievementCardSmall
                  achievement={achievement}
                  key={`${achievement.game_id}_${achievement.id}`}
                />
              );
            else if (viewOptionAchievements === 1)
              return (
                <AchievementCardMedium
                  achievement={achievement}
                  key={`${achievement.game_id}_${achievement.id}`}
                />
              );
            else
              return (
                <AchievementCardMedium
                  achievement={achievement}
                  key={`${achievement.game_id}_${achievement.id}`}
                />
              );
          })}
        </PageContainer>
      </Page>
    </>
  );
}
