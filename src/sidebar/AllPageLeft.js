import React from "react";
import { FaBookOpen, FaChartBar, FaGamepad, FaTrophy } from "react-icons/fa";
import MenuItemLink from "../components/core/MenuItemLink";
import styled from "styled-components";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function AllPageLeft() {
  return (
    <MainMenu>
      <MenuItemLink icon={<FaGamepad />} title={"Games"} to={"/games"} />
      <MenuItemLink
        icon={<FaTrophy />}
        title={"Achievements"}
        to={"/achievements"}
      />
      <MenuItemLink icon={<FaChartBar />} title={"History"} to={"/history"} />
      <MenuItemLink icon={<FaBookOpen />} title={"Backlog"} to={"/backlog"} />
    </MainMenu>
  );
}
