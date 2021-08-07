import React from "react";
import styled from "styled-components";
import Page from "../components/pages/Page";
import TotalAchievementsCard from "../components/toolkit/TotalAchievementsCard";
import TotalGamesCard from "../components/toolkit/TotalGamesCard";
import Card from "../components/core/Card";
import TotalPerfectGamesCard from "../components/toolkit/TotalPerfectGamesCard";
import GamesPageRightMenu from "../menu/GamesPageRightMenu";
import MainLeftMenu from "../menu/MainLeftMenu";

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
  cursor: pointer;
  border-top: 1px solid rgb(10, 17, 25);
  border-left: 1px solid rgb(10, 17, 25);
  color: rgb(198, 205, 211);
  text-shadow: rgba(10, 17, 25, 0.45) 1px 1px 1px;
  background-image: linear-gradient(
    rgba(10, 17, 25, 0.14) 0px,
    rgba(10, 17, 25, 0)
  );
  box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 22px -2px;

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
  return (
    <>
      <Page
        title='Overview'
        leftMenuItem={<MainLeftMenu />}
        rightMenuItem={<></>}
        sidebarLeftWidth='250px'
        sidebarRightWidth='200px'
        sidebarRightVisible={false}
      >
        <PageContainer>
          <CardContainer>
            <TotalPerfectGamesCard />
          </CardContainer>
          <CardContainer>
            <TotalAchievementsCard />
          </CardContainer>

          <CardContainer>
            <TotalGamesCard />
          </CardContainer>
          {/* <CardContainer>
            <Card>
              <RecentlyPlayedGame game={getRecentlyPlayedGame(games)} />
            </Card>
          </CardContainer> */}
        </PageContainer>
      </Page>
    </>
  );
}
