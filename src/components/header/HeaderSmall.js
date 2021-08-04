import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(10, 17, 25, 0.25);
  flex-direction: row;
  padding: 0.5rem 1rem;
  align-items: center;
`;

const NavButton = styled.div`
  border: none;
  z-index: 1000;
  padding: 0.5rem 0;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  color: rgb(198, 205, 211);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export default function HeaderSmall(props) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((old) => !open);
    props.toggleNav();
  };

  return (
    <Container>
      <NavButton onClick={toggleNav}>
        <Icon>
          {!props.sidebarOpen && (
            <FaIcons.FaBars style={{ width: "25px", height: "25px" }} />
          )}
          {props.sidebarOpen && (
            <FaIcons.FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
    </Container>
  );
}
