import React, { useEffect, useState } from "react";
import Axios from "axios";
import { bounce } from "react-animations";
import styled from "styled-components";

const api = "https://rick-api.herokuapp.com/api/";

const StyledSection = styled.section`
  color: blue;
  display:grid;
  text-align: center;
  align-content: center;
  margin: 20px;
  font-family: "ABeeZee";
  width: 100%;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #7ab900,
    0 0 70px #7ab900, 0 0 80px #7ab900, 0 0 100px #7ab900, 0 0 150px #7ab900;
  backdrop-filter: greyscale(0.8);
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );
  &:hover {
    color: green;
    font-weight: bold;
  }`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get(api)
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {});
  }, [character]);

  return (
    <StyledSection>
      {character.map(el => (
        <div key={el.id}>
          <div>
            <img src={el.image} alt={el.id} />
          </div>
          <h4>
            <p>Name: {el.name} </p> <p>Species:{el.species}</p>
            <p>Gender: {el.gender} </p>
          </h4>
        </div>
      ))}
    </StyledSection>
  );
}
