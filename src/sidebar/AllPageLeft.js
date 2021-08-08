import React from "react";
import {
  FaBookOpen,
  FaChartBar,
  FaGamepad,
  FaHome,
  FaTrophy,
} from "react-icons/fa";
import MenuItem from "../components/core/MenuItem";
import styled from "styled-components";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function AllPageLeft() {
  return (
    <MainMenu>
      <MenuItem
        icon={<FaHome />}
        title={"Overview"}
        onClick={() => (window.href = "/games")}
      />
      <MenuItem
        icon={<FaGamepad />}
        title={"Games"}
        onClick={() => (window.href = "/games")}
      />
      <MenuItem
        icon={<FaTrophy />}
        title={"Achievements"}
        onClick={() => (window.href = "/achievements")}
      />
      <MenuItem
        icon={<FaChartBar />}
        title={"History"}
        onClick={() => (window.href = "/achievements")}
      />
      <MenuItem
        icon={<FaBookOpen />}
        title={"Backlog"}
        onClick={() => (window.href = "/achievements")}
      />
    </MainMenu>
  );
}
