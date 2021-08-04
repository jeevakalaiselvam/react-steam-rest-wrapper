import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  padding-left: 1rem;
`;

const Icon = styled.div``;
const Title = styled.div`
  padding-left: 1rem;
`;

export default function NavItem(props) {
  return (
    <>
      <ItemContainer>
        <Icon>{props.children}</Icon>
        <Title>{props.title}</Title>
      </ItemContainer>
    </>
  );
}
