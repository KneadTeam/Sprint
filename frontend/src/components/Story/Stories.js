import Story from "./story"

function Stories( {stories, onEdit, onDelete} ){

    return (
        <div>
            {stories.map((story) => (
                <Story story_id={story.id} story_name={story.name} points={story.points} onEdit={onEdit} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Stories;