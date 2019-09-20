import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import Axios from "axios";

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
        console.log(res.data.results);
      }
    );
  };
  // }, [search]);

  return (
    <>
      <section className="search-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> search by name </label>
            <input
              value={search}
              onChange={handleChange}
              id="name"
              type="text"
            />
          </div>
        </form>
      </section>
      <section className="character-list">
        {result.map(el => (
          <div>
            Name: {el.name} Species:{el.species}
          </div>
        ))}
      </section>
    </>
  );
}
