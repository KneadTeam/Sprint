import './App.css';
// import { useState } from 'react';
import AddStory from "./Components/AddStory/AddStory"
// import Story from "./Components/Story/Story"
import Stories from './Components/Story/Stories';
import PBar from "./Components/Progress/PBar"

function App() {
  


  return (
    <div className="App">
      <div className="container">
        <AddStory></AddStory>
        <Stories></Stories>
        <PBar></PBar>
      </div>
    </div>
  );
}

export default App;
