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
  PAGINATION_TOTAL_COUNT,
  PAGINATION_TOTAL_OBTAINED,
  STORAGE_HEADER_TOTAL_GAMES,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Games() {
  const { setNavRightOpen } = useContext(GameContext);
  const [games, setGames] = useState({});
  const [gamesPage, setGamesPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [viewIndex, setViewIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const [selectIndex, setSelectedIndex] = useState(0);

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
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllGames(sortIndex, viewIndex, selectIndex);
  }, [sortIndex, viewIndex, gamesPage, selectIndex]);

  const sortHandler = (sortOption) => {
    setSortIndex((old) => sortOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    setViewIndex((old) => viewOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const selectedHandler = (selectOption) => {
    setSelectedIndex((old) => selectOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };

  const moveToPageRightHandler = () => {
    if (
      Math.ceil(
        localStorage.getItem(PAGINATION_TOTAL_COUNT) / PAGINATION_GAMES_PER_PAGE
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

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <GamesPageRight
            sortHandler={sortHandler}
            viewHandler={viewHandler}
            selectHandler={selectedHandler}
          />
        }
        content={
          <GamesContent
            games={games}
            viewType={viewIndex}
            page={gamesPage}
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
