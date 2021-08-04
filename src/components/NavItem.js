import React from "react";
import styled from "styled-components";

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  align-items: center;
`;

const NavIcon = styled.div`
  background-color: yellow;
`;
const NavTitle = styled.h5`
  background-color: green;
`;

export default function NavItem(props) {
  return (
    <NavItemContainer>
      <NavIcon>{props.children}</NavIcon>
      <NavTitle>{props.title}</NavTitle>
    </NavItemContainer>
  );
}
