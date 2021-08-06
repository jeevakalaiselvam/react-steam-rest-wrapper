import React, { useContext } from "react";
import { GamesContext } from "../context/GameContext";
import styled from "styled-components";
import SidebarItem from "../components/ui/SidebarItem";
import { FaClock, FaPercentage } from "react-icons/fa";
import {
  getGamesSortedByCompletion,
  getGamesSortedByNameAZ,
  getGamesSortedByNameZA,
  getGamesSortedByPlaytime,
} from "../actions/gameActions";

const RightMenu = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export default function GamesPageRightMenu() {
  const { games, setGames, viewOptionGames, setViewOptionGames } =
    useContext(GamesContext);

  return (
    <RightMenu>
      <Title>Sort Options</Title>
      <SidebarItem
        title='Completion'
        desc='Sort games by completion'
        sidebarItemClicked={() => {
          console.log("COMPLETION SORT CLICKED");
          localStorage.setItem("GAMES_SORT_OPTION", 0);
          setGames((oldGames) => getGamesSortedByCompletion(games));
        }}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Playtime'
        desc='Sort games by playtime'
        sidebarItemClicked={() => {
          console.log("PLAYTIME SORT CLICKED");
          localStorage.setItem("GAMES_SORT_OPTION", 1);
          setGames((oldGames) => getGamesSortedByPlaytime(games));
        }}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Name A-Z'
        desc='Sort games by names ascending'
        sidebarItemClicked={() => {
          console.log("NAME A-Z SORT CLICKED");
          localStorage.setItem("GAMES_SORT_OPTION", 2);
          setGames((oldGames) => getGamesSortedByNameAZ(games));
        }}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Name Z-A'
        desc='Sort games by names descending'
        sidebarItemClicked={() => {
          console.log("NAME Z-A CLICKED");
          localStorage.setItem("GAMES_SORT_OPTION", 3);
          setGames((oldGames) => getGamesSortedByNameZA(games));
        }}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>

      <Title>View Options</Title>
      <SidebarItem
        title='Minimal'
        desc='Small view type'
        sidebarItemClicked={() => {
          console.log("SMALL VIEW OPTION");
          localStorage.setItem("GAMES_VIEW_OPTION", 0);
          setViewOptionGames((oldViewOption) => 0);
        }}
      >
        <FaClock style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
      <SidebarItem
        title='Normal'
        desc='Normal view type'
        sidebarItemClicked={() => {
          console.log("MEDIUM VIEW OPTION");
          localStorage.setItem("GAMES_VIEW_OPTION", 1);
          setViewOptionGames((oldViewOption) => 1);
        }}
      >
        <FaPercentage style={{ width: "20px", height: "20px" }} />
      </SidebarItem>
    </RightMenu>
  );
}
