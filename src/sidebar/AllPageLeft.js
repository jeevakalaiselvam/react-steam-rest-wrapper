import React from "react";
import {
  FaBookOpen,
  FaChartBar,
  FaGamepad,
  FaSlidersH,
  FaTrophy,
} from "react-icons/fa";
import MenuItemLink from "../components/core/MenuItemLink";
import styled from "styled-components";
import {
  ACHIEVEMENTS_PAGE_INDEX,
  BACKLOG_PAGE_INDEX,
  CURRENT_PAGE,
  GAMES_PAGE_INDEX,
  HISTORY_PAGE_INDEX,
  SETTINGS_PAGE_INDEX,
  _STORAGE_READ,
  _STORAGE_WRITE,
} from "../helper/storage";

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
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, GAMES_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === GAMES_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaTrophy />}
        title={"Achievements"}
        to={"/achievements"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, ACHIEVEMENTS_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === ACHIEVEMENTS_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaChartBar />}
        title={"History"}
        to={"/history"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, HISTORY_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === HISTORY_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaBookOpen />}
        title={"Backlog"}
        to={"/backlog"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, BACKLOG_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === BACKLOG_PAGE_INDEX}
      />
      <MenuItemLink
        icon={<FaSlidersH />}
        title={"Settings"}
        to={"/settings"}
        navItemClicked={() => {
          _STORAGE_WRITE(CURRENT_PAGE, SETTINGS_PAGE_INDEX);
          window.location.href = `/${_STORAGE_READ(CURRENT_PAGE)}`;
        }}
        selected={_STORAGE_READ(CURRENT_PAGE) === SETTINGS_PAGE_INDEX}
      />
    </MainMenu>
  );
}
