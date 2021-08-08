import React, { useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import axios from "axios";
import { fetchGames } from "../action/games";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
  background-image: yellow;
`;

export default function Games() {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllGames = async () => {
      const gamesResponse = await fetchGames();
      if (gamesResponse.status === 200) {
        console.log("GAMES EFFECT -> ", gamesResponse.data);
        setGames((old) => gamesResponse.data.slice(0, 10));
        setLoading((old) => false);
      } else {
        console.log("ERROR IN GAMES EFFECT");
        setLoading((old) => false);
      }
    };
    setLoading((old) => true);
    getAllGames();
  }, []);

  return (
    <PageContainer>
      <Header totalGames={132} totalAchievements={456} totalPerfectGames={4} />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<GamesPageRight />}
        content={<GamesContent games={games} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"180px"}
        loading={loading}
      />
    </PageContainer>
  );
}
