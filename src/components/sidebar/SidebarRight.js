import React, { useContext } from "react";
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
import { GamesContext } from "../../context/GameContext";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  padding: 0.5rem;
  right: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "100%")};
  transition: all 0.2s;
  width: ${({ sidebarWidth }) => sidebarWidth};
  min-height: 100vh;
  background-color: rgba(10, 17, 25, 1);
  z-index: 10000;
  text-shadow: rgba(10, 17, 25, 0.45);
  border-right-color: rgba(10, 17, 25, 0.6);
  display: ${({ visible }) => (visible ? "block" : "none")};

  @media (min-width: 769px) {
    width: ${({ sidebarWidth }) => sidebarWidth};
    position: relative;
    display: block;
    top: 0;
    left: 0;
  }
`;

export default function SidebarRight(props) {
  const { sidebarOpenRight } = useContext(GamesContext);
  return (
    <SidebarContainer
      sidebarOpenRight={sidebarOpenRight}
      sidebarWidth={props.sidebarWidth}
      visible={props.visible}
    >
      {props.rightMenuItem}
    </SidebarContainer>
  );
}
