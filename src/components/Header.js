import React from "react";
import styled from  "styled-components";



const WrapDiv = styled.div`
  text-align: center;
  align-content: center;
  font-family:'ABeeZee';
  &:hover {
    background-position: 0 -500px;
  }
`;

export default function Header() {
  return (
    <WrapDiv>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </WrapDiv>
  );
}
