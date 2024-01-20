function Story ( {story_id, story_name, points, checkbox, onToggleCheckbox, onDelete} ){

    const styles = {
        outerShell: {
            display: "flex",
            flexDirection: "center",
            width: "60%",
            margin: "5vh auto 0 auto",
            border: "4px solid",
            borderRadius: "25px",
            justifyContent: "left",
        },
        storyText: {
            textAlign: "left",
            margin: "0 0 0 3vw"
        },
        clickables: {
            marginLeft: "auto",
            marginRight: "3vw",
            display: "flex",
        },
        checkbox: {
            marginLeft: "auto",
            marginRight: "5vw"
        }
    };

    return (
        <div className="story" style={styles.outerShell}>
            
            <div className="storyText" style={styles.storyText}>
                <h3>User Story</h3>
                <p> {story_name}</p>
                <p> {points} points</p>
            </div>

            <div style={styles.clickables}>
                <input type="checkbox" checked={checkbox}
                 style={styles.checkbox} onChange={() => onToggleCheckbox(story_id, checkbox)}/>
                <button>Edit</button> <button onClick={() => onDelete(story_id)}>Delete</button>                
            </div>
        </div>
    )
}

export default Story;