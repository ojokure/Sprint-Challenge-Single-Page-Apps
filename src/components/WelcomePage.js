import React from "react";
import styled from "styled-components";



const HeaderImg = styled.img`
    border-radius:25%;
    align-content:center;
`;
const HeaderSection = styled.section`
    border-radius:50%;
        color:#fe6a6a;
    font-family:'ABeeZee'; 
    justify-content:center;
    text-align:center;

    &:hover {
    color:blue;
    font-Weight: bold,
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
