import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import { fetchAchievements, fetchGames } from "../action/games";
import { GameContext } from "../context/GameContext";
import {
  STORAGE_HEADER_TOTAL_ACHIEVEMENTS,
  STORAGE_HEADER_TOTAL_GAMES,
} from "../helper/storage";
import {
  PAGINATION_ACHIEVEMENTS_PER_PAGE,
  PAGINATION_GAMES_PER_PAGE,
} from "../helper/pagination";
import AchievementContent from "../content/AchievementContent";
import AchievementPageRight from "../sidebar/AchievementPageRight";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Achievements() {
  const { setNavRightOpen } = useContext(GameContext);
  const [achievements, setAchievements] = useState({});
  const [achievementsPage, setAchievementsPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [viewIndex, setViewIndex] = useState(1);
  const [sortIndex, setSortIndex] = useState(0);
  const [selectIndex, setSelectIndex] = useState(0);

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAllAchievements = async (sortOrder, viewOrder) => {
      const achievements = await fetchAchievements(
        sortOrder,
        viewOrder,
        achievementsPage,
        selectIndex
      );
      setAchievements((old) => achievements);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllAchievements(sortIndex, viewIndex, selectIndex);
    localStorage.setItem("CURRENT_PAGE", "achievements");
  }, [sortIndex, viewIndex, achievementsPage, selectIndex]);

  const sortHandler = (sortOption) => {
    setSortIndex((old) => sortOption);
    setAchievementsPage((old) => 1);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    setViewIndex((old) => viewOption);
    setAchievementsPage((old) => 1);
    toggleNavRight();
  };

  const selectHandler = (selectOption) => {
    setSelectIndex((old) => selectOption);
    setAchievementsPage((old) => 1);
    toggleNavRight();
  };

  const moveToPageRightHandler = () => {
    if (
      Math.ceil(
        localStorage.getItem(STORAGE_HEADER_TOTAL_ACHIEVEMENTS) /
          PAGINATION_ACHIEVEMENTS_PER_PAGE
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
        rightSidebar={
          <AchievementPageRight
            sortHandler={sortHandler}
            viewHandler={viewHandler}
            selectHandler={selectHandler}
            viewIndex={viewIndex}
            sortIndex={sortIndex}
            selectIndex={selectIndex}
          />
        }
        content={
          <AchievementContent
            achievements={achievements}
            viewType={viewIndex}
            page={achievementsPage}
            moveToPageRight={moveToPageRightHandler}
            moveToPageLeft={moveToPageLeftHandler}
          />
        }
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        loading={loading}
      />
    </PageContainer>
  );
}
