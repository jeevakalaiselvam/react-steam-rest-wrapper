import React from "react";
import { FaGamepad, FaMedal, FaTrophy } from "react-icons/fa";
import styled from "styled-components";
import PerfectGamesOverlay from "../overlay/PerfectGamesOverlay";
import AllAchievementsOverlay from "../overlay/AllAchievementsOverlay";
import AllGamesOverlay from "../overlay/AllGamesOverlay";
import {
  STORAGE_HEADER_TOTAL_ACHIEVEMENTS,
  STORAGE_HEADER_TOTAL_GAMES,
  STORAGE_HEADER_TOTAL_PERFECT_GAMES,
} from "../helper/storage";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  flex-direction: column;
  overflow: scroll;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  height: 20vh;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  justify-content: center;
  width: 30%;

  @media only screen and (max-width: 1360px) and (min-width: 1201px) {
    width: 30%;
  }
  @media only screen and (max-width: 1200px) and (min-width: 1061px) {
    width: 30%;
  }
  @media only screen and (max-width: 1060px) and (min-width: 961px) {
    width: 30%;
  }
  @media only screen and (max-width: 960px) and (min-width: 769px) {
    width: 45%;
  }
  @media only screen and (max-width: 768px) and (min-width: 631px) {
    width: 96%;
  }
  @media only screen and (max-width: 630px) and (min-width: 481px) {
    width: 96%;
  }
  @media only screen and (max-width: 480px) {
    width: 96%;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const PerfectGames = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  background-color: rgba(10, 17, 25, 0.6);
  z-index: 2;
  align-items: center;
  text-shadow: 0 0 6px #da8c4a;
  color: #fecc09;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
  justify-content: center;
`;

const Achievements = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  z-index: 2;
  background-color: rgba(10, 17, 25, 0.6);
  color: #55aece;
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
  align-items: center;
  justify-content: center;
`;

const Games = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  z-index: 2;
  height: 100%;
  color: #a5c93a;
  background-color: rgba(10, 17, 25, 0.6);
  text-shadow: 2px 2px 2px rgb(10 17 25 / 45%);
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  font-size: 3rem;
  justify-content: center;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  z-index: 2;
  font-size: 3rem;
  justify-content: center;
`;

export default function OverviewContent() {
  return (
    <ContentContainer>
      <ContainerInner>
        <Card>
          <ImageOverlay>
            <PerfectGamesOverlay></PerfectGamesOverlay>
          </ImageOverlay>
          <PerfectGames>
            <Icon>
              <FaMedal />
            </Icon>
            <Data>
              {localStorage.getItem(STORAGE_HEADER_TOTAL_PERFECT_GAMES)}
            </Data>
          </PerfectGames>
        </Card>
        <Card>
          <ImageOverlay>
            <AllAchievementsOverlay></AllAchievementsOverlay>
          </ImageOverlay>
          <Achievements>
            <Icon>
              <FaTrophy />
            </Icon>
            <Data>
              {localStorage.getItem(STORAGE_HEADER_TOTAL_ACHIEVEMENTS)}
            </Data>
          </Achievements>
        </Card>
        <Card>
          <ImageOverlay>
            <AllGamesOverlay></AllGamesOverlay>
          </ImageOverlay>
          <Games>
            <Icon>
              <FaGamepad />
            </Icon>
            <Data>{localStorage.getItem(STORAGE_HEADER_TOTAL_GAMES)}</Data>
          </Games>
        </Card>
      </ContainerInner>
    </ContentContainer>
  );
}
