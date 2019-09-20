import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
     <div><CharacterList/></div> 
    </main>
  );
}
