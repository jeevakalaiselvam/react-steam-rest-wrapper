import React, { useContext } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

const MenuItemContainer = styled(Link)`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  color: #959da6;
  cursor: pointer;

  &:hover {
    background-color: rgba(122, 132, 148, 0.26);
    color: #f5f5f5;
  }
`;

const MenuItemIcon = styled.div`
  font-size: 1.2rem;
  transform: translateY(-1px);
`;

const MenuItemTitle = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.9rem;
  margin-left: 1rem;
  align-items: center;
  flex-direction: row;
`;

export default function MenuItemLink(props) {
  const { setNavLeftOpen } = useContext(GameContext);

  const toggleNavLeft = () => {
    setNavLeftOpen((navState) => !navState);
  };

  return (
    <MenuItemContainer to={props.to} onClick={toggleNavLeft}>
      <MenuItemIcon>{props.icon}</MenuItemIcon>
      <MenuItemTitle>{props.title}</MenuItemTitle>
    </MenuItemContainer>
  );
}
