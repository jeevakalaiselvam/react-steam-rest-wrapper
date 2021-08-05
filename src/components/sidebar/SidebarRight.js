import React from "react";
import styled from "styled-components";
import {
  FaGamepad,
  FaTrophy,
  FaBookOpen,
  FaMedal,
  FaFolderOpen,
} from "react-icons/fa";
import NavItem from "../ui/NavItem";
import { HiHome } from "react-icons/hi";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  right: ${({ sidebarOpenRight }) => (sidebarOpenRight ? "0" : "-100%")};
  transition: all 0.2s;
  width: 200px;
  min-height: 100vh;
  background-color: rgba(10, 17, 25, 1);
  z-index: 10;
  text-shadow: rgba(10, 17, 25, 0.45);
  border-right-color: rgba(10, 17, 25, 0.6);

  @media (min-width: 769px) {
    width: 230px;
    position: relative;
    display: block;
    top: 0;
    left: 0;
  }
`;

export default function SidebarRight(props) {
  return (
    <SidebarContainer
      sidebarOpenRight={props.sidebarOpenRight}
      onClick={props.sidebarItemClicked}
    >
      <NavItem title='Overview' desc='Profile overview' navigate='/'>
        <HiHome style={{ width: "20px", height: "20px" }} />
      </NavItem>

      <NavItem title='Owned Games' desc='All your Games' navigate='/games'>
        <FaGamepad style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem
        title='Achievements'
        desc='All your Achievements'
        navigate='/achievements'
      >
        <FaTrophy style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem
        title='History'
        desc='Your Achievement History'
        navigate='/history'
      >
        <FaBookOpen style={{ width: "20px", height: "20px" }} />
      </NavItem>
      <NavItem title='Milestones' desc='Your Milestones' navigate='/milestones'>
        <FaMedal style={{ width: "20px", height: "20px" }} />
      </NavItem>

      <NavItem
        title='Games Backlog'
        desc='Your Games Backlog'
        navigate='/gamesbacklog'
      >
        <FaFolderOpen style={{ width: "20px", height: "20px" }} />
      </NavItem>
    </SidebarContainer>
  );
}