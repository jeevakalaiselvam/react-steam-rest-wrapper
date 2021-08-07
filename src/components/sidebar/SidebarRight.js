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
  right: ${({ sidebarOpenRight }) => (sidebarOpenRight ? "0" : "-100%")};
  transition: all 0.2s;
  width: ${(props) => props.size};
  max-height: 100vh;
  min-height: 100vh;
  overflow: scroll;
  background-color: rgba(10, 17, 25, 1);
  z-index: 10000;
  text-shadow: rgba(10, 17, 25, 0.45);
  border-right-color: rgba(10, 17, 25, 0.6);

  @media (min-width: 769px) {
    width: ${(props) => props.size};
    position: relative;
    display: block;
    top: 0;
    left: 0;
    display: ${(props) => (props.showRightMenu ? "block" : "none")};
  }
`;

export default function SidebarRight(props) {
  const { sidebarOpenRight } = useContext(GamesContext);
  return (
    <SidebarContainer sidebarOpenRight={sidebarOpenRight}>
      {props.rightMenuItem}
    </SidebarContainer>
  );
}
