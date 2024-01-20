function Story ( {story_id, story_name, points, checkbox, onDelete} ){
    return (
        <div className="story">
            <h3> User Story</h3>
            <p> {story_name} [{points}] <input type="checkbox" checked={checkbox} /> </p>
            <button>Edit</button>  &emsp;
            <button onClick={() => onDelete(story_id)}>Delete</button>                
        </div>
    )
}

export default Story;