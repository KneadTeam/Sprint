import { useState } from "react";

function Story ( {story_id, story_name, points, checkbox, onToggleCheckbox, onDelete} ){

    const [isHovered, setIsHovered] = useState(false);

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
        },
        button: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            // background: "linear-gradient(180deg, rgba(255, 174, 105, 1) 0%, rgba(255, 173, 102, 1) 32%, rgba(255, 132, 25, 1) 100%)",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "50px 0px 50px 5px",
            transition: "background 0.3s", 
            background: isHovered
                ? "linear-gradient(180deg, rgba(255, 132, 25, 1) 0%, rgba(255, 173, 102, 1) 68%, rgba(255, 174, 105, 1) 100%)"
                : "linear-gradient(180deg, rgba(255, 174, 105, 1) 0%, rgba(255, 173, 102, 1) 32%, rgba(255, 132, 25, 1) 100%)",
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
                <button style={styles.button} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    Edit
                </button>
                <button style={styles.button} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onDelete(story_id) }>
                    Delete
                </button>                
            </div>
        </div>
    )
}

export default Story;