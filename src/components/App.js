import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { name, city, color, bio, links } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} image="https://i.imgur.com/mV8PQxj.gif" github={links.github} linkedin={links.linkedin} />
    </div>
  );
  
}

export default App;

