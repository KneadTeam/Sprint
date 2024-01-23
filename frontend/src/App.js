import './App.css';
import { useState } from 'react';
// import { useEffect } from 'react';
import AddStory from "./components/AddStory/AddStory"
import Overlay from './components/Overlay/Overlay';
import Stories from './components/Story/Stories';
import ProgressBar from "./components/Progress/progressbar";
import SprintLogo from "./assets/sprint-logo.png"

function App() {
  const [isOverlay, setOverlay] = useState(false);
  
  // Favour: This doesn't do anything? \\

  // const baseUrl = "http://localhost:8000"
  // // progress bar 
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const fetchProgressData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/progress'); // Replace with your API endpoint
  //       const data = await response.json();
  //       setProgress(data.progress); // Update state with fetched progress data
  //     } catch (error) {
  //       console.error('Error fetching progress data:', error);
  //     }
  //   };

  //   fetchProgressData();
  // }, []);

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

  // Number of User Stories
  function getPercent(userStories) {
    const totalUserStories = userStories.length;
    const completedStories = userStories.filter((story) => story.completed);
    const completedStoriesCount = completedStories.length;
  
    const progress_percent = totalUserStories > 0 ? (completedStoriesCount / totalUserStories) * 100 : 0;

    return progress_percent;
  }

  // Add a User Story
  function addStory(new_story){
    new_story.id = (user_stories.length + 1)
    setStories(user_stories => [...user_stories, new_story])
    console.log(new_story)
  }

  // Delete a User Story
  function deleteStory (id){
    setStories(user_stories.filter((user_story) => user_story.id !== id))
    console.log('Deleted user story: ' + id)
  }

  // Toggle the checkbox in a User Story
  const toggleCompleteStory = (id) => {

    const updatedStories = user_stories.map((story) => {
      if (story.id === id) {
        // Toggle the completed property
        return { ...story, completed: !story.completed, };
      } else {
        return story;
      }
    });
  
    setStories(updatedStories);

    // Favour: Didn't wanna delete your code but this doesn't work. \\
    
    //   console.log("Toggled", id);
      
    //   const newState = !state;

    //   fetch(baseUrl + "/story/" + id, {
    //     method: 'PUT'
    //   })
    //     .then()
    //     .catch(error => {
    //       console.error('Error:', error)
    //   });

  // };
  };

  return (
    <div className="App">

      <div className="container">
        <img src={SprintLogo} alt="sprint logo" className="sprint-logo" />
        <ProgressBar value={getPercent(user_stories)}/>
        <button className='add-story-button' onClick={() => setOverlay(true)}>Add User Story</button>
        <Overlay isOpen={isOverlay} onClose={() => setOverlay(!isOverlay)}>
          <AddStory onAdd={addStory} cancelAdd={() => setOverlay(!isOverlay)}></AddStory>
        </Overlay>
        {user_stories.length > 0 ? <Stories stories={user_stories} onToggleCheckbox={toggleCompleteStory} onDelete={deleteStory}/> : "No User Stories Added"}
      </div>
    </div>
  );
}

export default App;
