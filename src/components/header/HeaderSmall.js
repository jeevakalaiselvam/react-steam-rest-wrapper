import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(10, 17, 25, 1);
  flex-direction: row;
  position: fixed;
  z-index: 3000;
  height: 60px;
  top: 0;
  left: 0;
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

const Title = styled.h1`
  font-size: 1rem;
  flex: 1;
  text-align: center;
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
            <FaBars style={{ width: "25px", height: "25px" }} />
          )}
          {props.sidebarOpen && (
            <FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
      <Title>{props.title}</Title>
      <NavButton onClick={toggleNav} style={{ visibility: "hidden" }}>
        <Icon>
          {!props.sidebarOpen && (
            <FaBars style={{ width: "25px", height: "25px" }} />
          )}
          {props.sidebarOpen && (
            <FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
    </Container>
  );
}
