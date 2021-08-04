import React from "react";
import styled from "styled-components";

const LargeHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;
`;

export default function HeaderLarge() {
  return <LargeHeader></LargeHeader>;
}
