import React from "react";
import { FaBookOpen, FaChartBar, FaGamepad, FaTrophy } from "react-icons/fa";
import MenuItemLink from "../components/core/MenuItemLink";
import styled from "styled-components";
import { _STORAGE_READ } from "../helper/storage";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Subheader = styled.div`
  color: #fefefe;
  font-size: 0.6rem;
  align-self: flex-start;
  margin: 0.5rem 1rem;
  text-align: left;
`;

export default function AllPageLeft() {
  return (
    <MainMenu>
      <Subheader>SELECT CATEGORY</Subheader>
      <MenuItemLink
        icon={<FaGamepad />}
        title={"Games"}
        to={"/games"}
        selected={_STORAGE_READ("CURRENT_PAGE") === "games"}
      />
      <MenuItemLink
        icon={<FaTrophy />}
        title={"Achievements"}
        to={"/achievements"}
        selected={_STORAGE_READ("CURRENT_PAGE") === "achievements"}
      />
      <MenuItemLink
        icon={<FaChartBar />}
        title={"History"}
        to={"/history"}
        selected={false}
      />
      <MenuItemLink
        icon={<FaBookOpen />}
        title={"Backlog"}
        to={"/backlog"}
        selected={false}
      />
    </MainMenu>
  );
}
