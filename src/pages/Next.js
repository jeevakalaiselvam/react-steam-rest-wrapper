import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import {
  fetchAchievements,
  fetchAchievementsBacklog,
  fetchAchievementsNext,
  fetchGames,
} from "../action/games";
import { GameContext } from "../context/GameContext";
import {
  ACHIEVEMENTGAMEPAGE_SELECT,
  ACHIEVEMENTGAMEPAGE_SORT,
  ACHIEVEMENTGAMEPAGE_VIEW,
  ACHIEVEMENTS_PAGE_INDEX,
  BACKLOGPAGE_SORT,
  BACKLOGPAGE_VIEW,
  BACKLOG_PAGE_INDEX,
  CURRENT_PAGE,
  NEXT_PAGE_INDEX,
  PAGINATION_TOTAL_COUNT,
  STORAGE_HEADER_TOTAL_ACHIEVEMENTS,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import {
  PAGINATION_ACHIEVEMENTS_PER_PAGE,
  PAGINATION_ACHIEVEMENTS_PER_PAGE_NEXT,
  PAGINATION_GAMES_PER_PAGE,
} from "../helper/pagination";
import AchievementContent from "../content/AchievementContent";
import AchievementPageRight from "../sidebar/AchievementPageRight";
import BacklogContent from "../content/BacklogContent";
import BacklogPageRight from "../sidebar/BacklogPageRight";
import NextContent from "../content/NextContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
`;

export default function Next() {
  const [achievements, setAchievements] = useState({});
  const [achievementsPage, setAchievementsPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllAchievements = async () => {
      const achievements = await fetchAchievementsNext(achievementsPage);
      setAchievements((old) => achievements);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllAchievements();
    _STORAGE_WRITE(CURRENT_PAGE, NEXT_PAGE_INDEX);
  }, [achievementsPage]);

  const moveToPageRightHandler = () => {
    if (
      Math.ceil(
        _STORAGE_READ(PAGINATION_TOTAL_COUNT) /
          PAGINATION_ACHIEVEMENTS_PER_PAGE_NEXT
      ) === achievementsPage
    ) {
      setAchievementsPage((old) => achievementsPage);
    } else {
      setAchievementsPage((old) => achievementsPage + 1);
    }
  };
  const moveToPageLeftHandler = () => {
    if (achievementsPage === 1) {
      setAchievementsPage((old) => 1);
    } else {
      setAchievementsPage((old) => achievementsPage - 1);
    }
  };

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<></>}
        content={
          <NextContent
            achievements={achievements}
            page={achievementsPage}
            moveToPageRight={moveToPageRightHandler}
            moveToPageLeft={moveToPageLeftHandler}
          />
        }
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"0px"}
        loading={loading}
      />
    </PageContainer>
  );
}
