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
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState(0);

  const toggleNavRight = () => {
    setNavRightOpen((navState) => !navState);
  };

  useEffect(() => {
    const getAllGames = async () => {
      const games = await fetchGames();
      console.log("EFFECT GAMES PAGE -> ", games);
      setGames((old) => games);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getAllGames();
  }, []);

  const sortByCompletion = () => {
    console.log("Sorted games by completion");
    setLoading((old) => true);
    setGames((oldGames) => getGamesSortedByCompletion(games));
    setLoading((old) => false);
    toggleNavRight();
  };

  const sortByPlaytime = () => {
    console.log("Sorted games by playtime");
    setLoading((old) => true);
    setGames((oldGames) => getGamesSortedByPlaytime(games));
    setLoading((old) => false);
    toggleNavRight();
  };

  const sortViewMinimal = () => {
    console.log("Sorted view by minimal");
    setLoading((old) => true);
    setViewType((old) => 0);
    setLoading((old) => false);
    toggleNavRight();
  };

  const sortViewNormal = () => {
    console.log("Sorted view by normal");
    setLoading((old) => true);
    setViewType((old) => 1);
    setLoading((old) => false);
    toggleNavRight();
  };

  return (
    <PageContainer>
      <Header games={games} />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={
          <GamesPageRight
            sortByCompletion={sortByCompletion}
            sortByPlaytime={sortByPlaytime}
            sortViewMinimal={sortViewMinimal}
            sortViewNormal={sortViewNormal}
          />
        }
        content={<GamesContent games={games} viewType={viewType} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        loading={loading}
      />
    </PageContainer>
  );
}
