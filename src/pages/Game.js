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
  SELECTED_GAME,
  STORAGE_HEADER_TOTAL_GAMES,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";
import GameContent from "../content/GameContent";
import GamePageRight from "../sidebar/GamePageRight";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Game(props) {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const { setNavRightOpen } = useContext(GameContext);
  const [viewIndex, setViewIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const [selectIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setLoading((old) => true);
    setGame((old) => JSON.parse(localStorage.getItem(SELECTED_GAME)));

    setLoading((old) => false);
  }, []);

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  const sortHandler = (sortOption) => {
    setSortIndex((old) => sortOption);
    toggleNavRight();
  };
  const viewHandler = (viewOption) => {
    setViewIndex((old) => viewOption);
    toggleNavRight();
  };
  const selectedHandler = (selectOption) => {
    setSelectedIndex((old) => selectOption);
    toggleNavRight();
  };

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <GamePageRight
            sortHandler={sortHandler}
            viewHandler={viewHandler}
            selectHandler={selectedHandler}
            viewIndex={viewIndex}
            sortIndex={sortIndex}
            selectIndex={selectIndex}
          />
        }
        content={<GameContent game={game} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        loading={loading}
      />
    </PageContainer>
  );
}
