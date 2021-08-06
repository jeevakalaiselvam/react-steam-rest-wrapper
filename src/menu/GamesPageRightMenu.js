import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";
import SidebarItem from "../components/ui/SidebarItem";
import { FaClock, FaPercentage } from "react-icons/fa";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export default function GamesPageRightMenu() {
  const {
    contextSortGamePlaytime,
    contextSortGameCompletion,
    contextChangeGamesViewSmall,
    contextChangeGamesViewMedium,
  } = useContext(GamesContext);

  const sortGamesByPlaytime = () => {
    contextSortGamePlaytime();
  };

  const sortGamesByCompletion = () => {
    contextSortGameCompletion();
  };

  const showGamesSmall = () => {
    contextChangeGamesViewSmall();
  };

  const showGamesMedium = () => {
    contextChangeGamesViewMedium();
  };

  return (
    <RightMenu>
      <Title>Sort Options</Title>
      <SidebarItem
        title='Playtime'
        desc='Sort games by playtime'
        sidebarItemClicked={sortGamesByPlaytime}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Completion'
        desc='Sort games by completion'
        sidebarItemClicked={sortGamesByCompletion}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <Title>View Options</Title>
      <SidebarItem
        title='Small'
        desc='Show small'
        sidebarItemClicked={showGamesSmall}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Medium'
        desc='Show Medium'
        sidebarItemClicked={showGamesMedium}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
    </RightMenu>
  );
}
