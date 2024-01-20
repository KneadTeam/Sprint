import './App.css';
import { useState, useEffect } from 'react';
import AddStory from "./components/AddStory/AddStory"
import Stories from './components/Story/Stories';
import Overlay from './components/Overlay/Overlay';
import ProgressBar from "./components/Progress/progressbar";
import SprintLogo from './sprint-logo.png';

function App() {
  const baseUrl = "http://localhost:8000"
  // progress bar 
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    return () => {
      
    }
  }, [progress]);

  const [isOverlay, setOverlay] = useState(false);

  // Number of User Stories
  // const total_user_stories = 0;

  // Sample User Stories
  const [user_stories, setStories] = useState([
    { 
      id: 0,
      name: "As a user, I can open the webpage.",
      points: 2,
      completed: false 
    },
    { 
      id: 1,
      name: "As a user, I can add a story.",
      points: 2,
      completed: false 
    },
    { 
      id: 2,
      name: "As a user, I can edit a story.",
      points: 2,
      completed: false 
    }
  ])

  // Add a User Story
  function addStory(new_story){
    setStories(user_stories => [...user_stories, new_story])
    console.log(new_story)

  }

  // Edit a User Story
  // TODO

  // Delete a User Story
  function deleteStory (id){
    setStories(user_stories.filter((user_story) => user_story.id !== id))
    console.log('Deleted user story: ' + id)
  }

  // Toggle the checkbox in a User Story
  const toggleCompleteStory = (id, state) => {
    console.log("toggled", id);
    
    const newState = !state;

    fetch(baseUrl + "/story/" + id, {
      method: 'PUT'
    })
      .then()
      .catch(error => {
        console.error('Error:', error)
    });

  };

  return (
    <div className="App">

      <div className="container">
        <img src={SprintLogo} alt="sprint logo" className="sprint-logo" />
        <ProgressBar value={progress}/>
        <button onClick={() => setOverlay(true)}>Add User Story</button>
        <Overlay isOpen={isOverlay} onClose={() => setOverlay(!isOverlay)}>
          <AddStory onAdd={addStory} cancelAdd={() => setOverlay(!isOverlay)}></AddStory>
        </Overlay>
        {user_stories.length > 0 ? <Stories stories={user_stories} onToggleCheckbox={toggleCompleteStory} onDelete={deleteStory}/> : "No User Stories Added"}
      </div>
    </div>
  );
}

export default App;
