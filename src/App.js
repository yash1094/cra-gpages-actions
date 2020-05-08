import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <h1>A basic react app</h1>
      <Navigation />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
