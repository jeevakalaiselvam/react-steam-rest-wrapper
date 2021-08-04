import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import NavItem from "../NavItem";

const Container = styled.div``;

export default function HeaderSmall(props) {
  const NavButton = styled.button`
    border: none;
    z-index: 1000;

    &:focus {
      outline: none;
    }
  `;

  return (
    <Container>
      <NavButton onClick={props.showOrHideNav}>
        <FaIcons.FaBars />
      </NavButton>
    </Container>
  );
}
