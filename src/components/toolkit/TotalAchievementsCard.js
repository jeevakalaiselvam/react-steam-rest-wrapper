import { React, useContext } from "react";
import { GamesContext } from "../../context/GameContext";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

const Overlay = styled.div``;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconAndData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;

const Icon = styled.div`
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

export default function TotalAchievementsCard() {
  const [games] = useContext(GamesContext);

  return (
    <Overlay>
      <Inner>
        <IconAndData>
          <Icon>
            <FaIcons.FaTrophy style={{ width: "60px", height: "60px" }} />
          </Icon>
          <Count>{games.length}</Count>
        </IconAndData>
        <Title>Achievements</Title>
      </Inner>
    </Overlay>
  );
}
