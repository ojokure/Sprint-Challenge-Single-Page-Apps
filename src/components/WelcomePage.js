import React from "react";
import styled from "styled-components";



const HeaderImg = styled.img`
    /* border-radius:50%; */
    align-content:center;
    padding-left: 380px;
`;
const HeaderSection = styled.header`
    border-radius:50%;
        color:#fed45f;
    font-family:'ABeeZee'; 
    &:hover {
    color:blue;
    background-position: 0 -500px;
  }
`;
export default function WelcomePage() {
  return (
    <HeaderSection>
      <HeaderSection>
        <h1>Welcome To The Ultimate Fan Site!</h1>
        <HeaderImg
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderSection>
    </HeaderSection>
  );
}
