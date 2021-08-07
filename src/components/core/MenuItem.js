import React from "react";

import styled from "styled-components";

const MenuItemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(122, 132, 148, 0.26);
  }
`;

const MenuItemIcon = styled.div`
  font-size: 1.3rem;
  transform: translateY(-1px);
`;

const MenuItemTitle = styled.div`
  width: 100%;
  display: flex;
  font-size: 1rem;
  margin-left: 1rem;
  align-items: center;
  flex-direction: row;
`;

export default function MenuItem(props) {
  return (
    <MenuItemContainer>
      <MenuItemIcon>{props.icon}</MenuItemIcon>
      <MenuItemTitle>{props.title}</MenuItemTitle>
    </MenuItemContainer>
  );
}
