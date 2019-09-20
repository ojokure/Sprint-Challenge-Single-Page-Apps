import React, { useEffect, useState } from "react";
import Axios from "axios";

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
          Name: {el.name} Species:{el.species} Gender: {el.gender}
          <div>
            <img src={el.image}/>
          </div>
        </div>
  
      ))}
    </section>
  );
}
