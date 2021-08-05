import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  padding-left: 1rem;
  color: rgb(198, 205, 211);
  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(122, 132, 148, 0.26);
  }
`;

const Icon = styled.div`
  cursor: pointer;
`;
const Title = styled.div`
  padding-left: 1rem;
  font-size: 0.9rem;
  justify-self: baseline;
  transform: translate(0, 5%);

  cursor: pointer;
`;

export default function NavItem(props) {
  return (
    <>
      {/* <BlackToolTip title={props.desc}> */}
      <ItemContainer to={`${props.navigate}`}>
        <Icon>{props.children}</Icon>
        <Title>{props.title}</Title>
      </ItemContainer>
      {/* </BlackToolTip> */}
    </>
  );
}
