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
  PAGINATION_TOTAL_COUNT,
  PAGINATION_TOTAL_OBTAINED,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";
import HistoryContent from "../content/HistoryContent";
import HistoryPageRight from "../sidebar/HistoryPageRight";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function History() {
  const [achievements, setAchievements] = useState({});
  const [achievementsYear, setAchievementsYear] = useState(
    new Date().getFullYear()
  );
  const [loading, setLoading] = useState(true);
  const { setNavRightOpen } = useContext(GameContext);
  const [viewIndex, setViewIndex] = useState(
    Number(_STORAGE_READ(HISTORYPAGE_VIEW))
  );

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAllAchievementsInYearSortedRecent = async (achievementsYear) => {
      const achievementsForSaidYear = await fetAchievementsForYearRecentSorted(
        achievementsYear
      );
      setAchievements((old) => achievementsForSaidYear);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    console.log(`EFFECT getting HISTORYPAGE -> YEAR ${achievementsYear}`);
    getAllAchievementsInYearSortedRecent(achievementsYear);
    _STORAGE_WRITE(CURRENT_PAGE, HISTORY_PAGE_INDEX);
  }, [achievementsYear, viewIndex]);

  const viewHandler = (viewOption) => {
    _STORAGE_WRITE(HISTORYPAGE_VIEW, viewOption);
    setViewIndex((old) => viewOption);
    toggleNavRight();
  };

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <HistoryPageRight viewHandler={viewHandler} viewIndex={viewIndex} />
        }
        content={<HistoryContent achievements={achievements} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        loading={loading}
      />
    </PageContainer>
  );
}
