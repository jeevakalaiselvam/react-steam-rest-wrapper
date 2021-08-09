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
import { STORAGE_HEADER_TOTAL_GAMES } from "../helper/storage";
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
      console.log("EFFECT GAMES PAGE -> ", games);
      setGames((old) => games);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllGames(sortIndex, viewIndex, selectIndex);
  }, [sortIndex, viewIndex, gamesPage, selectIndex]);

  const sortHandler = (sortOption) => {
    console.log("Sort Selected -> ", sortOption);
    setSortIndex((old) => sortOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    console.log("View Selected -> ", viewOption);
    setViewIndex((old) => viewOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };
  const selectedHandler = (selectOption) => {
    console.log("Select Selected -> ", selectOption);
    setSelectedIndex((old) => selectOption);
    setGamesPage((old) => 1);
    toggleNavRight();
  };

  const moveToPageRightHandler = () => {
    console.log("Moving to Page right");
    if (
      Math.ceil(
        localStorage.getItem(STORAGE_HEADER_TOTAL_GAMES) /
          PAGINATION_GAMES_PER_PAGE
      ) === gamesPage
    ) {
      setGamesPage((old) => gamesPage);
    } else {
      setGamesPage((old) => gamesPage + 1);
    }
  };
  const moveToPageLeftHandler = () => {
    console.log("Moving to Page left");
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
