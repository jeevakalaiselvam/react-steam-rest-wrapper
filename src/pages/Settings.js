import React, { useEffect } from "react";
import styled from "styled-components";
import Page from "../components/core/Page";
import Header from "../components/core/Header";
import AllPageLeft from "../sidebar/AllPageLeft";
import { refreshDatabaseInBackend } from "../action/games";
import {
  CURRENT_PAGE,
  SELECTED_GAME,
  SETTINGS_PAGE_INDEX,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";
import SettingsContent from "../content/SettingsContent";
import { LEFTSIDEBAR_WIDTH } from "../constants/dimensions";

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
      if (_STORAGE_READ(SELECTED_GAME)) {
        setTimeout(() => {
          window.location.href = "/planner";
        }, 3000);
      } else {
        setTimeout(() => {
          window.location.href = "/games";
        }, 3000);
      }
    }
  };

  return (
    <PageContainer>
      <Header />
      <Page
        leftSidebar={<AllPageLeft />}
        rightSidebar={""}
        content={<SettingsContent refreshDatabase={refreshDatabase} />}
        leftSidebarWidth={LEFTSIDEBAR_WIDTH}
        rightSidebarWidth={"0px"}
      />
    </PageContainer>
  );
}
