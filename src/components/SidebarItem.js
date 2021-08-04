import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export default function SidebarItem(props) {
  const SidebarItem = styled(Link)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items: center;
  `;

  const Icon = styled.div`
    width: 40px;
    height: 40px;
  `;

  const Title = styled.p`
    color: rgb(198, 205, 211);
  `;

  return (
    <SidebarItem to={props.path} onClick={props.linkClicked}>
      <Icon>{props.children}</Icon>
      <Title>{props.title}</Title>
    </SidebarItem>
  );
}
