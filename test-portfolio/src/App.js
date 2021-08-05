import React, { useState } from 'react'
import './App.css';



import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [page,setPage]=useState(<ProjectPage/>)
  return (
    <div className="App">
     
  {page}
  </div>
  );
}

export default App;

