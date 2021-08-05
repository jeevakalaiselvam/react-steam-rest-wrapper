import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaEllipsisV } from "react-icons/fa";

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
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const toggleNavLeft = () => {
    setOpenLeft((old) => !openLeft);
    props.toggleNavLeft();
  };

  const toggleNavRight = () => {
    setOpenRight((old) => !openRight);
    props.toggleNavRight();
  };

  return (
    <Container>
      <NavButton onClick={toggleNavLeft}>
        <Icon>
          {!props.sidebarOpenLeft && (
            <FaBars style={{ width: "25px", height: "25px" }} />
          )}
          {props.sidebarOpenLeft && (
            <FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
      <Title>{props.title}</Title>
      <NavButton onClick={toggleNavRight}>
        <Icon>
          {!props.sidebarOpenRight && (
            <FaEllipsisV style={{ width: "23px", height: "23px" }} />
          )}
          {props.sidebarOpenRight && (
            <FaTimes style={{ width: "25px", height: "25px" }} />
          )}
        </Icon>
      </NavButton>
    </Container>
  );
}
