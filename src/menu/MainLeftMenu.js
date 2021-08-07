import React from "react";
import {
  FaBookOpen,
  FaFolderOpen,
  FaGamepad,
  FaMedal,
  FaTrophy,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import styled from "styled-components";
import NavItem from "../components/ui/NavItem";

const LeftMenu = styled.div`
  padding: 0.5rem;
`;

const Title = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export default function MainLeftMenu() {
  return (
    <LeftMenu>
      <Title>Select Options</Title>
      <NavItem title='Overview' desc='Profile overview' navigate='/'>
        <HiHome style={{ width: "20px", height: "20px" }} />
      </NavItem>

      <NavItem title='Games' desc='All your Games' navigate='/games'>
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
    </LeftMenu>
  );
}
