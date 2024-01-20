import './App.css';
import { useState } from 'react';
import AddStory from "./components/AddStory/AddStory"
// import Story from "./Components/Story/Story"
import Stories from './components/Story/Stories';
import ProgressBar from "./components/Progress/progressbar";

function App() {

  // progress bar 
  const [progress, setProgress] = useState(0);
  useEffect(() => {

    return () => {
      
    }
  }, [progress]);

  // Number of User Stories
  // const total_user_stories = 0;

  // Sample User Stories
  const [user_stories, setStories] = useState([
    { 
      id: 0,
      name: "As a user, I can open the webpage.",
      points: 2,
      state: false 
    },
    { 
      id: 1,
      name: "As a user, I can add a story.",
      points: 2,
      state: false 
    },
    { 
      id: 2,
      name: "As a user, I can edit a story.",
      points: 2,
      state: false 
    }
  ])

  // Add a User Story
  function addStory(new_story){
    setStories(user_stories => [...user_stories, new_story])
    // console.log('added user story: '+ new_story)
    console.log(new_story)

  }

  // Edit a User Story
  // TODO

  // Delete a User Story
  function deleteStory (id){
    setStories(user_stories.filter((user_story) => user_story.id !== id))
    console.log('deleted user story: ' + id)
  }

  return (
    <div className="App">
      <div className="container">
        <ProgressBar value={progress}/>
        <AddStory onAdd={addStory}></AddStory>
        {user_stories.length > 0 ? <Stories stories={user_stories} onDelete={deleteStory}/> : "No User Stories Added"}
      </div>
    </div>
  );
}

export default App;
