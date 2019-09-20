import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <SearchForm />
      <div>
        <Route exact path="/characters" component={CharacterList} />
      </div>
    </main>
  );
}
