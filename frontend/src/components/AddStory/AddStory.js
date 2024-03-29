// CONTENTS OF THIS SHOULD BE ON SEPARATE PAGE
import { useState } from "react";
import "./AddStory.css"

function AddStory({ onAdd, cancelAdd }) {
  const [user_story, setStory] = useState('');
  const [points, setPoints] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Make sure user story isn't blank and points isnt negative
    if (!user_story) {
      alert("Please Add User Story!");
      return;
    } else if (points < 0) {
      alert("Please Add a positive value for Difficulty Level!");
      return;
    }

    // Update list of stories with new story
    onAdd({ name: user_story, points: points, state: false});

    // Reset form to be empty
    setStory("");   
    setPoints("");

    // Closes Add Story menu
    cancelAdd();
    
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>User Story</label>
        <input
          type="text"
          value={user_story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="As a [who], I want to [what], so that [why]."
        />
      </div>
      <div className='form-control'>
        <label>Story Points</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          placeholder="0"
        />
      </div>

      <p>
        <input type="submit" className="save-btn" value="Save"/> &emsp;
        <input type="button" className="cancel-btn" value="Cancel" onClick={cancelAdd}/>
      </p>
    </form>
  );
}

export default AddStory;
