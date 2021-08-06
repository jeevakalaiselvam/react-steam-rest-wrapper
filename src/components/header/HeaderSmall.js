import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaTimes,
  FaEllipsisV,
  FaTrophy,
  FaGamepad,
  FaMedal,
} from "react-icons/fa";
import {
  getAllPerfectedGames,
  getAllUnlockedAchievements,
} from "../../actions/achievementActions";
import { GamesContext } from "../../context/GameContext";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(10, 17, 25, 1);
  flex-direction: row;
  position: fixed;
  z-index: 3000;
  height: 60px;
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
  align-items: center;
`;

const NavButton = styled.div`
  border: none;
  z-index: 1000;
  padding: 0.5rem 0;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  color: rgb(198, 205, 211);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  flex: 1;
  text-align: center;
`;

const NavStatus = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StatusColumn = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
`;

const StatusIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0.5rem;
  align-items: center;
`;
const StatusData = styled.div`
  display: flex;
  font-size: 1.2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function HeaderSmall(props) {
  const { games } = useContext(GamesContext);
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const toggleNavLeft = () => {
    setOpenLeft((old) => !openLeft);
    props.toggleNavLeft();
  };

  const toggleNavRight = () => {
    setOpenRight((old) => !openRight);
    props.toggleNavRight();
  };

  return (
    <Container>
      <NavButton onClick={toggleNavLeft}>
        <Icon>
          {!props.sidebarOpenLeft && (
            <FaBars style={{ width: "25px", height: "25px" }} />
          )}
          {props.sidebarOpenLeft && (
            <FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
      <NavStatus>
        <StatusColumn color={"rgb(254, 204, 9)"}>
          <StatusIcon>
            <FaMedal />
          </StatusIcon>
          <StatusData>{getAllPerfectedGames(games).length}</StatusData>
        </StatusColumn>
        <StatusColumn color={"rgb(85, 174, 206)"}>
          <StatusIcon>
            <FaTrophy />
          </StatusIcon>
          <StatusData>{getAllUnlockedAchievements(games).length}</StatusData>
        </StatusColumn>
        <StatusColumn color={"rgb(165, 201, 58)"}>
          <StatusIcon>
            <FaGamepad />
          </StatusIcon>
          <StatusData>{games.length}</StatusData>
        </StatusColumn>
      </NavStatus>
      {props.showRightMenu && (
        <NavButton onClick={toggleNavRight}>
          <Icon>
            {!props.sidebarOpenRight && (
              <FaEllipsisV style={{ width: "23px", height: "23px" }} />
            )}
            {props.sidebarOpenRight && (
              <FaTimes style={{ width: "25px", height: "25px" }} />
            )}
          </Icon>
        </NavButton>
      )}
    </Container>
  );
}
