import React from "react";
import CharacterList from "./components/CharacterList";
import { Route, Link, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { bounce } from "react-animations";
import Header from "./components/Header";


export default function App() {
  return (
    <main>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "grey",
          marginRight: "10px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/characters"
        activeStyle={{
          fontWeight: "bold",
          color: "grey",
        }}
      >
        Characters
      </NavLink>
      <Header />
      <SearchForm />
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
      </div>
    </main>
  );
}
