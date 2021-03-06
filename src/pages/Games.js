import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import { fetchGames } from "../action/games";
import { GameContext } from "../context/GameContext";
import {
  CURRENT_PAGE,
  GAMEPAGE_SELECT,
  GAMEPAGE_SORT,
  GAMEPAGE_VIEW,
  GAMES_PAGE_INDEX,
  PAGINATION_TOTAL_COUNT,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";
import { LEFTSIDEBAR_WIDTH, RIGHTSIDEBAR_WIDTH } from "../constants/dimensions";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
`;

export default function Games() {
  const [games, setGames] = useState({});
  const [gamesPage, setGamesPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { setNavRightOpen } = useContext(GameContext);
  const [viewIndex, setViewIndex] = useState(
    Number(_STORAGE_READ(GAMEPAGE_VIEW))
  );
  const [sortIndex, setSortIndex] = useState(
    Number(_STORAGE_READ(GAMEPAGE_SORT))
  );
  const [selectIndex, setSelectedIndex] = useState(
    Number(_STORAGE_READ(GAMEPAGE_SELECT))
  );

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAllGames = async (sortOrder, viewOrder, selectOrder) => {
      const games = await fetchGames(
        sortOrder,
        viewOrder,
        gamesPage,
        selectOrder
      );
      setGames((old) => games);
      let combinedAchievements = [];
      games.length &&
        games.forEach((game) => {
          game.all_achievements.forEach((achievement) => {
            combinedAchievements = [...combinedAchievements, achievement];
          });
        });
      console.log("ALL ACHIEVEMENTS", combinedAchievements);
      setAllAchievements((old) => combinedAchievements);
      setLoading((old) => false);
    };
    setLoading((old) => true);

    getAllGames(sortIndex, viewIndex, selectIndex);
    _STORAGE_WRITE(CURRENT_PAGE, GAMES_PAGE_INDEX);
  }, [sortIndex, viewIndex, gamesPage, selectIndex]);

  const sortHandler = (sortOption) => {
    _STORAGE_WRITE(GAMEPAGE_SORT, sortOption);
    setSortIndex((old) => sortOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    _STORAGE_WRITE(GAMEPAGE_VIEW, viewOption);
    setViewIndex((old) => viewOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const selectedHandler = (selectOption) => {
    _STORAGE_WRITE(GAMEPAGE_SELECT, selectOption);
    setSelectedIndex((old) => selectOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };

  const moveToPageRightHandler = () => {
    if (
      Math.ceil(
        _STORAGE_READ(PAGINATION_TOTAL_COUNT) / PAGINATION_GAMES_PER_PAGE
      ) === gamesPage
    ) {
      setGamesPage((old) => gamesPage);
    } else {
      setGamesPage((old) => gamesPage + 1);
    }
  };
  const moveToPageLeftHandler = () => {
    if (gamesPage === 1) {
      setGamesPage((old) => 1);
    } else {
      setGamesPage((old) => gamesPage - 1);
    }
  };

  const updateGlobalXPCounts = () => {};

  const [allAchievements, setAllAchievements] = useState([]);

  let combinedAchievements = [];

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft allAchievements={allAchievements} />}
        rightSidebar={
          <GamesPageRight
            sortHandler={sortHandler}
            viewHandler={viewHandler}
            selectHandler={selectedHandler}
            viewIndex={viewIndex}
            sortIndex={sortIndex}
            selectIndex={selectIndex}
          />
        }
        content={
          <GamesContent
            games={games}
            viewIndex={viewIndex}
            page={gamesPage}
            moveToPageRight={moveToPageRightHandler}
            moveToPageLeft={moveToPageLeftHandler}
          />
        }
        leftSidebarWidth={LEFTSIDEBAR_WIDTH}
        rightSidebarWidth={RIGHTSIDEBAR_WIDTH}
        loading={loading}
      />
    </PageContainer>
  );
}
