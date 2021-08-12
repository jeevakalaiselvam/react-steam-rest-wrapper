import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import {
  fetAchievementsForYearRecentSorted,
  fetchAchievementMilestones,
  fetchGames,
} from "../action/games";
import { GameContext } from "../context/GameContext";
import {
  CURRENT_PAGE,
  GAMEPAGE_SELECT,
  GAMEPAGE_SORT,
  GAMEPAGE_VIEW,
  GAMES_PAGE_INDEX,
  HISTORYPAGE_VIEW,
  HISTORY_PAGE_INDEX,
  MILESTONE_PAGE_INDEX,
  PAGINATION_TOTAL_COUNT,
  PAGINATION_TOTAL_OBTAINED,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";
import HistoryContent from "../content/HistoryContent";
import HistoryPageRight from "../sidebar/HistoryPageRight";
import HeaderHistory from "../components/core/HeaderHistory";
import { getAllAchievementsObtainedForDate } from "../helper/other";
import MilestoneContent from "../content/MilestoneContent";
import MilestoneRightPage from "../sidebar/MilestoneRightPage";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
`;

export default function Milestone() {
  const [achievements, setAchievements] = useState({});
  const [loading, setLoading] = useState(true);
  const { navRightOpen, setNavRightOpen } = useContext(GameContext);
  const [viewIndex, setViewIndex] = useState(
    Number(_STORAGE_READ(HISTORYPAGE_VIEW))
  );

  const openNavRight = () => {
    if (!navRightOpen) {
      setNavRightOpen((old) => true);
    }
  };

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAchievementsMilestones = async (year) => {
      const achievementMilestones = await fetchAchievementMilestones(year);
      console.log(achievementMilestones);
      setAchievements((old) => achievementMilestones);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAchievementsMilestones();
    _STORAGE_WRITE(CURRENT_PAGE, MILESTONE_PAGE_INDEX);
  }, [viewIndex]);

  const viewHandler = (viewOption) => {
    _STORAGE_WRITE(HISTORYPAGE_VIEW, viewOption);
    setViewIndex((old) => viewOption);
    toggleNavRight();
  };

  return (
    <PageContainer>
      <HeaderHistory />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <MilestoneRightPage viewHandler={viewHandler} viewIndex={viewIndex} />
        }
        content={<MilestoneContent achievements={achievements} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"0px"}
        loading={loading}
      />
    </PageContainer>
  );
}
