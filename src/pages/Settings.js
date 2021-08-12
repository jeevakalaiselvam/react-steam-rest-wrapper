import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import GamesPageRight from "../sidebar/GamesPageRight";
import GamesContent from "../content/GamesContent";
import { useState } from "react";
import { fetchGames, refreshDatabaseInBackend } from "../action/games";
import { GameContext } from "../context/GameContext";
import {
  CURRENT_PAGE,
  GAMEPAGE_SELECT,
  GAMEPAGE_SORT,
  GAMEPAGE_VIEW,
  PAGINATION_TOTAL_COUNT,
  PAGINATION_TOTAL_OBTAINED,
  SETTINGS_PAGE_INDEX,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import { PAGINATION_GAMES_PER_PAGE } from "../helper/pagination";
import SettingsContent from "../content/SettingsContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
`;

export default function Settings() {
  useEffect(() => {
    _STORAGE_WRITE(CURRENT_PAGE, SETTINGS_PAGE_INDEX);
  }, []);

  const refreshDatabase = async () => {
    console.log("Refreshing Database");
    const response = await refreshDatabaseInBackend();
    if (response) {
      setTimeout(() => {
        window.location.href = "/games";
      }, 4000);
    }
  };

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={""}
        content={<SettingsContent refreshDatabase={refreshDatabase} />}
        leftSidebarWidth={"180px"}
        rightSidebarWidth={"0px"}
      />
    </PageContainer>
  );
}
