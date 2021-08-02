import React from 'react'
import './App.css';

import Nav from "../src/Components/Nav"
import Intro from "./Components/Intro"
import Projects from "./Components/Projects"
import Blogs from "./Components/Blogs"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Nav/>
       <Intro/>
      <Projects/>
     {/* <Blogs/>
    <Skills/>

      <Footer/> */}
    </div>
  );
}

export default App;

