import Story from "./Story"

function Stories( {stories, onDelete} ){

    return (
        <div>
            {stories.map((story) => (
                <Story story_id={story.id} story_name={story.name} points={story.points} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Stories;