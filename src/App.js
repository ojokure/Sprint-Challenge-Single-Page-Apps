import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { bounce } from "react-animations";


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path="/" component={WelcomePage} />
      <div>
        <Route exact path="/characters" component={CharacterList} />
      </div>
    </main>
  );
}
