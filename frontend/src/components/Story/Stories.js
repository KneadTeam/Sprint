import Story from "./story"

function Stories( {stories, onToggleCheckbox, onDelete} ){

    return (
        <div>
            {stories.map((story) => (
                <Story key={story.id} story_id={story.id} story_name={story.name} points={story.points} onToggleCheckbox={onToggleCheckbox} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Stories;