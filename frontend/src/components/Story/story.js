
function Story ( {story_id, story_text, points, checkbox} ){
    return (
        <div className="story">
            <h3> User Story</h3>
            <p> {story_text} {points} <input type="checkbox" checked={checkbox} /> </p>                
        </div>
    )
}



export default Story;