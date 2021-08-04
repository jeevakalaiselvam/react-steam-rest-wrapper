import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Container = styled.div``;

export default function HeaderSmall(props) {
  const NavButton = styled.button`
    background-color: red;
    border: none;
    z-index: 1000;

    &:focus {
      outline: none;
    }
  `;

  return (
    <Container>
      <NavButton onClick={props.showOrHideNav}>Home</NavButton>
    </Container>
  );
}
