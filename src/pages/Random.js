import React, { useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import { useState } from "react";
import { fetchGameRandom } from "../action/games";
import {
  CURRENT_PAGE,
  GAMES_PAGE_INDEX,
  _STORAGE_WRITE,
} from "../helper/storage";
import RandomContent from "../content/RandomContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
`;

export default function Random() {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGame = async () => {
      const game = await fetchGameRandom();
      console.log(game);
      setGame((old) => game);
      setLoading((old) => false);
    };
    setLoading((old) => true);
    getGame();
    _STORAGE_WRITE(CURRENT_PAGE, GAMES_PAGE_INDEX);
  }, []);

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={<></>}
        content={<RandomContent game={game} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"0px"}
        loading={loading}
      />
    </PageContainer>
  );
}
