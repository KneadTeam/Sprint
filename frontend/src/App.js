import './App.css';
import { useState, useEffect } from 'react';
import AddStory from "./components/AddStory/AddStory"
import Overlay from './components/Overlay/Overlay';
import Stories from './components/Story/Stories';
import ProgressBar from "./components/Progress/progressbar";
import SprintLogo from "./assets/sprint-logo.png"

function App() {

  // progress bar 
  const [progress, setProgress] = useState(0);
  const [isOverlay, setOverlay] = useState(false);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/progress'); // Replace with your API endpoint
        const data = await response.json();
        setProgress(data.progress); // Update state with fetched progress data
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };

    fetchProgressData();
  }, []);


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
        <ProgressBar value={40}/>
        <button className='add-story-button' onClick={() => setOverlay(true)}>Add User Story</button>
        <Overlay isOpen={isOverlay} onClose={() => setOverlay(!isOverlay)}>
          <AddStory onAdd={addStory} cancelAdd={() => setOverlay(!isOverlay)}></AddStory>
        </Overlay>
        {user_stories.length > 0 ? <Stories stories={user_stories} onDelete={deleteStory}/> : "No User Stories Added"}
      </div>
    </div>
  );
}

export default App;
