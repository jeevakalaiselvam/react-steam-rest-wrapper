import React from "react";
import styled from "styled-components";
import GameCardNormal from "../components/card/GameCardNormal";
import GameCardMinimal from "../components/card/GameCardMinimal";
import { FaBackward, FaForward } from "react-icons/fa";
import {
  PAGINATION_TOTAL_COUNT,
  STORAGE_HEADER_TOTAL_GAMES,
  _STORAGE_READ,
} from "../helper/storage";
import {
  PAGINATION_ACHIEVEMENTS_PER_PAGE,
  PAGINATION_GAMES_PER_PAGE,
} from "../helper/pagination";
import AchievementMinimal from "../components/card/AchievementMinimal";
import AchievementNormal from "../components/card/AchievementNormal";
import { recent10Years } from "../helper/other";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  @media only screen and (max-width: 840px) {
    padding-bottom: 0rem;
  }
`;

const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  justify-self: flex-start;
  justify-content: center;
  overflow: scroll;
  flex-direction: column;
  flex-wrap: wrap;
`;

const YearContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 840px) {
    display: none;
  }
`;

const YearSelect = styled.select`
  width: 200px;
  background-color: rgba(10, 17, 25, 0.6);
  outline: none;
  padding: 0.5rem;
  border: none;
  color: #fefefe;
  justify-self: flex-end;
`;
const AchievementsContainer = styled.div`
  flex: 1;
  background-color: gray;
`;

export default function HistoryContent(props) {
  const achievements = props.achievements;
  const yearProp = props.year;
  console.log(yearProp);

  return (
    <ContentContainer>
      <ContainerInner>
        <YearContainer>
          <YearSelect
            onChange={(e) => props.yearChangedHandler(e.target.value)}
          >
            {recent10Years().map((year) => (
              <option
                key={year}
                value={year}
                selected={year === +yearProp ? "selected" : ""}
              >
                {year}
              </option>
            ))}
          </YearSelect>
        </YearContainer>
        <AchievementsContainer></AchievementsContainer>
      </ContainerInner>
    </ContentContainer>
  );
}
