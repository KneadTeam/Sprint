import './App.css';
import { useState, useEffect } from 'react';
import AddStory from "./components/AddStory/AddStory"
import Overlay from './Components/Overlay/Overlay';
import Stories from './components/Story/Stories';
import ProgressBar from "./components/Progress/progressbar";
import SprintLogo from './sprint-logo.png';

function App() {

  // progress bar 
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    return () => {
      
    }
  }, [progress]);

  // Overlay boolean
  const [isOverlay, setOverlay] = useState(false)

  // Number of User Stories
  // const total_user_stories = 0;

  const [user_stories, setStories] = useState([
    // Samples User Stories initially provided
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
    new_story.id = (user_stories.length + 1)
    setStories(user_stories => [...user_stories, new_story])
    console.log(new_story)
  }

  // Delete a User Story
  function deleteStory (id){
    setStories(user_stories.filter((user_story) => user_story.id !== id))
    console.log('deleted user story: ' + id)
  }

  return (
    <div className="App">

      <div className="container">
      <img src={SprintLogo} alt="sprint logo" className="sprint-logo" />
        <ProgressBar value={progress}/>
        {/* Progress Bar */}
        
        <PBar></PBar>

        {/* Add Story in an Overlay */}
        <button onClick={() => setOverlay(true)}>Add User Story</button>
        <Overlay isOpen={isOverlay} onClose={() => setOverlay(!isOverlay)}>
          <AddStory onAdd={addStory} cancelAdd={() => setOverlay(!isOverlay)}></AddStory>
        </Overlay>

        {/* User Stories */}
        {user_stories.length > 0 ? <Stories stories={user_stories} onDelete={deleteStory}/> : "No User Stories Added"}
      </div>
    </div>
  );
}

export default App;
