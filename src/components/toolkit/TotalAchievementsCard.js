import { React, useContext, useRef } from "react";
import { GamesContext } from "../../context/GameContext";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import RecentAchievementsCard from "../fancy/RecentAchievementsCard";

const Overlay = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
  height: 100%;
`;

const OverlayImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;
`;

const IconAndData = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;
  align-items: center;
  padding: 1rem;
  justify-content: center;
`;

const Icon = styled.div`
  color: rgb(85, 174, 206);
  z-index: 100;
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
      <OverlayImage>
        <RecentAchievementsCard />
      </OverlayImage>
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
