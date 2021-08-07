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
  left: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};
  transition: all 0.2s;
  width: 200px;
  min-height: 100vh;
  background-color: rgba(10, 17, 25, 1);
  z-index: 10000;
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

const Title = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
`;

export default function SidebarLeft(props) {
  const { sidebarOpenLeft } = useContext(GamesContext);

  return (
    <SidebarContainer sidebarOpenLeft={sidebarOpenLeft}>
      {props.rightMenuItem}
    </SidebarContainer>
  );
}
