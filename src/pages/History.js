import React, { useContext } from "react";

import Page from "../components/pages/Page";
import styled from "styled-components";
import { GamesContext } from "../context/GameContext";
import {
  getAllUnlockedAchievements,
  getRecentlyUnlockedAllAchievements,
  getTotalDatesInUnlocked,
} from "../actions/achievementActions";
import Card from "../components/core/Card";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
`;

const PageContainerInner = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const DateBlock = styled.div`
  width: 20px;
  background-color: rgba(10, 17, 25, 0.8);
  height: 20px;
  margin: 5px;
`;

export default function History() {
  const { games } = useContext(GamesContext);

  return (
    <>
      <Page title='History' rightMenuItem={<></>} showRightMenu={true}>
        <PageContainer>
          <PageContainerInner>
            {new Date().getFullYear()}
            {console.log(
              getTotalDatesInUnlocked(getRecentlyUnlockedAllAchievements(games))
            )}
          </PageContainerInner>
        </PageContainer>
      </Page>
    </>
  );
}
