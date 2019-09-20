import React, { useState } from "react";
import Axios from "axios";
import styled from  "styled-components";
import { bounce } from "react-animations";







export default function SearchForm() {
  const [search, setSearch] = useState("");

  const [result, setResults] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // useEffect(() => {
  const handleSubmit = e => {
    e.preventDefault();
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`).then(
      res => {
        setResults(res.data.results);
      }
    );
  };
  // }, [search]);

  return (
    <>
      <section className="search-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> search </label>
            <input
              value={search}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="search by name"
            />
          </div>
        </form>
      </section>
      <section className="character-list">
        {result.map(el => (
          <div>
            <div>
              <img src={el.image} alt={el.id} />
            </div>
           <h4> Name: {el.name} Species:{el.species} </h4> 
          </div>
        ))}
      </section>
    </>
  );
}
