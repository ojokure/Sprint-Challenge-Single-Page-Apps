import React, { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { bounce } from "react-animations";
import Header from "./components/Header";
import Axios from "axios";

const api = "https://rickandmortyapi.com/api/character/";

export default function App() {
  const [character, setCharacter] = useState([]);

  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    Axios.get(api)
      .then(res => {
        setCharacter(res.data.results);
      })
      .catch(err => {});
  }, [character]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // useEffect(() => {
  const handleSubmit = e => {
    e.preventDefault();
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`).then(
      res => {
        setSearchResult(res.data.results);
        setSearch("");
      }
    );
  };
  // }, [search]);

  return (
    <main>
      <div>
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "#fe6a6a",
            margin: "12px",
            fontFamily: "ABeeZee"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/characters"
          activeStyle={{
            fontWeight: "bold",
            color: "#fe6a6a",
            margin: "12px",
            fontFamily: "ABeeZee"
          }}
        >
          Characters
        </NavLink>
        <NavLink
          to="/search"
          activeStyle={{
            fontWeight: "bold",
            color: "#fe6a6a",
            margin: "12px",
            fontFamily: "ABeeZee"
          }}
        >
          Search
        </NavLink>

        <Header />
        <Route
          exact
          path="/search"
          render={props => (
            <SearchForm
              search={search}
              searchResult={searchResult}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <div>
          <Route exact path="/" component={WelcomePage} />
          <Route
            exact
            path="/characters"
            render={props => <CharacterList character={character} />}
          />
        </div>
      </div>
    </main>
  );
}
