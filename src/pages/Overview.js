import React, { useContext } from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import TotalAchievementsCard from "../components/toolkit/TotalAchievementsCard";
import TotalGamesCard from "../components/toolkit/TotalGamesCard";
import Card from "../components/core/Card";
import TotalPerfectGamesCard from "../components/toolkit/TotalPerfectGamesCard";
import { GamesContext } from "../context/GameContext";
import RecentlyPlayedGame from "../components/toolkit/RecentlyPlayedGame";
import { getRecentlyPlayedGame } from "../actions/achievementActions";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 1201px) {
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    justify-content: center;
  }
  @media only screen and (max-width: 480px) and (min-width: 320px) {
    justify-content: center;
  }
`;

const CardContainer = styled.div`
  margin: 8px;

  @media only screen and (min-width: 1201px) {
    width: 30%;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1025px) {
    width: 46%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 46%;
  }
  @media only screen and (max-width: 768px) and (min-width: 481px) {
    width: 46%;
  }
  @media only screen and (max-width: 480px) {
    width: 96%;
  }
`;

export default function Overview() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <Page title='Overview'>
        <PageContainer>
          <CardContainer>
            <Card>
              <TotalAchievementsCard />
            </Card>
          </CardContainer>

          <CardContainer>
            <Card>
              <TotalPerfectGamesCard />
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <TotalGamesCard />
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <RecentlyPlayedGame game={getRecentlyPlayedGame(games)} />
            </Card>
          </CardContainer>
        </PageContainer>
      </Page>
    </>
  );
}
