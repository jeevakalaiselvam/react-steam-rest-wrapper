import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  color: rgb(198, 205, 211);

  background-image: linear-gradient(
    rgba(255, 255, 255, 0.14) 0px,
    rgba(255, 255, 255, 0)
  );
  text-shadow: rgba(10, 17, 25, 0.45) 1px 1px 1px;
  box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 22px -2px;
  border-radius: 6px;
  border-top: 1px solid rgb(94, 103, 113);
  border-left: 1px solid rgb(82, 91, 104);
`;

export default function Card(props) {
  return <CardContainer>{props.children}</CardContainer>;
}
