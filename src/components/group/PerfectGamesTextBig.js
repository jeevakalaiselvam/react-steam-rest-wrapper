import React, { useContext } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import {
  getAllPerfectedGames,
  getAllUnlockedAchievements,
} from "../../actions/achievementActions";
import { GamesContext } from "../../context/GameContext";

const IconAndData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  z-index: 100;
  justify-content: center;
`;

const Icon = styled.div`
  z-index: 100;
  color: rgb(85, 174, 206);
`;

const Count = styled.h1`
  margin-left: 10px;
  color: rgb(85, 174, 206);
  text-shadow: rgba(10, 17, 25, 0.45) 2px 2px 2px;
  font-size: 3rem;
  transform: translateY(4%);
`;
const Title = styled.h4`
  font-size: 1rem;
`;

export default function PerfectGamesTextBig() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <IconAndData>
        <Icon>
          <FaIcons.FaMedal style={{ width: "50px", height: "50px" }} />
        </Icon>
        <Count>{getAllPerfectedGames(games).length}</Count>
      </IconAndData>
      <Title>Perfect Games</Title>
    </>
  );
}
