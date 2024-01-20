import Story from "./story"

function Stories( {stories, onToggleCheckbox, onEdit, onDelete} ){

    return (
        <div>
            {stories.map((story) => (
                <Story story_id={story.id} story_name={story.name} points={story.points} onEdit={onEdit} onToggleCheckbox={onToggleCheckbox} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Stories;