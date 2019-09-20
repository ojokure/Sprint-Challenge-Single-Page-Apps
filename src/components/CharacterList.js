import React, { useEffect, useState } from "react";
import Axios from "axios";

const api = 'https://rickandmortyapi.com/api/character/';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
      const [character, setCharacter] = useState([]);



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(api)
     .then(res => {
           setCharacter(res.data.results) 
     })
     .catch(err => {
     });


  }, []);

  return (

    <section className="character-list">
       {character.map(el => 
       <div>
        <div>{el.name}</div>
        <div>{el.species}</div>
        <div>{el.gender}</div>

        </div>
      ) }
    </section>
  );
}
