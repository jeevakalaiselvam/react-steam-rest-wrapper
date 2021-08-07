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
      <MenuItem icon={<FaHome />} title={"Overview"} />
      <MenuItem icon={<FaGamepad />} title={"Games"} />
      <MenuItem icon={<FaTrophy />} title={"Achievements"} />
      <MenuItem icon={<FaChartBar />} title={"History"} />
      <MenuItem icon={<FaBookOpen />} title={"Backlog"} />
    </MainMenu>
  );
}
