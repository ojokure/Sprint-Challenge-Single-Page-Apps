import React, { useEffect, useState } from "react";
import Axios from "axios";
import { bounce } from "react-animations";
import styled from "styled-components";

const api = "https://rickandmortyapi.com/api/character/";

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
    <section className="character-list">
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
    </section>
  );
}
