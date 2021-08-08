import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import { fetchGames } from "../action/games";
import {
  getGamesSortedByCompletion,
  getGamesSortedByPlaytime,
} from "../helper/games";
import { GameContext } from "../context/GameContext";
import { HEADER_TOTAL_GAMES } from "../helper/storage";

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

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAllGames = async (sortOrder, viewOrder) => {
      const games = await fetchGames(sortOrder, viewOrder, gamesPage);
      console.log("EFFECT GAMES PAGE -> ", games);
      setGames((old) => games);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllGames(sortIndex, viewIndex);
  }, [sortIndex, viewIndex, gamesPage]);

  // setLoading((old) => true);
  // setGames((oldGames) => getGamesSortedByCompletion(games));
  // setLoading((old) => false);
  // toggleNavRight();

  const sortHandler = (sortOption) => {
    console.log("Sort Selected -> ", sortOption);
    setSortIndex((old) => sortOption);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    console.log("View Selected -> ", viewOption);
    setViewIndex((old) => viewOption);
    toggleNavRight();
  };

  const moveToPageRightHandler = () => {
    console.log("Moving to Page right");
    if (
      Math.ceil(localStorage.getItem(HEADER_TOTAL_GAMES) / 25) === gamesPage
    ) {
      setGamesPage((old) => gamesPage);
    } else {
      setGamesPage((old) => gamesPage + 1);
    }
  };
  const moveToPageLeftHandler = () => {
    console.log("Moving to Page left");
    setGamesPage((old) => gamesPage - 1);
  };

  return (
    <PageContainer>
      <Header games={games} />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <GamesPageRight sortHandler={sortHandler} viewHandler={viewHandler} />
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
