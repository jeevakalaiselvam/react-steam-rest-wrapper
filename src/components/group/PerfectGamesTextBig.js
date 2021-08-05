import React, { useContext } from "react";
import styled from "styled-components";
import { FaMedal } from "react-icons/fa";
import { getAllPerfectedGames } from "../../actions/achievementActions";
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
  color: rgb(254, 204, 9);
  text-shadow: rgb(218, 140, 74) 0px 0px 6px;
`;

const Count = styled.h1`
  margin-left: 10px;
  color: rgb(254, 204, 9);
  text-shadow: rgb(218, 140, 74) 10px 10px 100px;
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
          <FaMedal style={{ width: "50px", height: "50px" }} />
        </Icon>
        <Count>{getAllPerfectedGames(games).length}</Count>
      </IconAndData>
      <Title>Perfect Games</Title>
    </>
  );
}
