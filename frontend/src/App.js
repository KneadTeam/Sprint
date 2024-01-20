import './App.css';
import { useState } from 'react';
import AddStory from "./components/AddStory/AddStory";
import Stories from "./components/Story/Stories";
import PBar from "./components/Progress/PBar";

function App() {

  const baseUrl = "http://localhost:8000"
  
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
    // console.log('added user story: '+ new_story)
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
        <PBar></PBar>
        <AddStory onAdd={addStory}></AddStory>
        
        {user_stories.length > 0 ? <Stories stories={user_stories} onToggleCheckbox={toggleCompleteStory} onDelete={deleteStory}/> : "No User Stories Added!"}
      </div>
    </div>
  );
}

export default App;
