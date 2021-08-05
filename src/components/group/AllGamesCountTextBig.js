import React, { useContext } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import {
  getAllUnlockedAchievements,
  getCompletionAverage,
  getCompletionAveragePercentageData,
} from "../../actions/achievementActions";
import { GamesContext } from "../../context/GameContext";

import { IoGameController } from "react-icons/io5";

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
  color: rgb(165, 201, 58);
`;

const Count = styled.h1`
  margin-left: 10px;
  color: rgb(165, 201, 58);
  text-shadow: rgba(10, 17, 25, 0.45) 2px 2px 2px;
  font-size: 3rem;
  transform: translateY(4%);
`;
const Title = styled.h4`
  font-size: 1rem;
`;

export default function AllGamesCountTextBig() {
  const [games] = useContext(GamesContext);

  return (
    <>
      <IconAndData>
        <Icon>
          <FaIcons.FaGamepad style={{ width: "60px", height: "60px" }} />
        </Icon>
        <Count>{games.length}</Count>
      </IconAndData>
      <Title>Owned Games</Title>
    </>
  );
}
