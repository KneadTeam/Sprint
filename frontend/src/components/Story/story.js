import { useState } from "react";

function Story ( {story_id, story_name, points, checkbox, onToggleCheckbox, onDelete} ){

    const [check, setChecked] = useState(false);
    const [checkHovered, setCheckHovered] = useState(false);
    const [editIsHovered, setEditIsHovered] = useState(false);
    const [deleteIsHovered, setDeleteIsHovered] = useState(false);


    const styles = {
        outerShell: {
            display: "flex",
            flexDirection: "center",
            width: "60%",
            margin: "5vh auto 0 auto",
            border: deleteIsHovered 
                ? "4px solid red" 
                : (check 
                    ? "4px solid green" 
                    : "4px solid"),
            borderRadius: "25px",
            justifyContent: "left",
            background: "rgba(255, 213, 128, 0.5)",

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
            margin: "60px 0px 0px 0px",
            marginRight: "25px",
            width: "25px",  
            height: "25px", 
            borderRadius: "5px", 
        },
        edit: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "50px 0px 50px 5px",
            transition: "background 0.3s",
            // transform: editIsHovered ? scale(1.1) : null,
            background: editIsHovered
                ? "linear-gradient(180deg, rgb(248, 134, 34) 0%, rgb(219, 111, 17) 32%, rgb(187, 91, 7) 100%)"
                : "linear-gradient(180deg, rgba(255, 174, 105, 1) 0%, rgba(255, 173, 102, 1) 32%, rgba(255, 132, 25, 1) 100%)",
        },
        delete: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "50px 0px 50px 5px",
            transition: "background 0.3s",
            // transform: editIsHovered ? scale(1.1) : null, 
            background: "linear-gradient(180deg, rgba(255, 174, 105, 1) 0%, rgba(255, 173, 102, 1) 32%, rgba(255, 132, 25, 1) 100%)",
        }
    };

    return (
        <div className="story" style={styles.outerShell}>
            
            <div className="storyText" style={styles.storyText}>
                <h3>User Story</h3>
                <p> {story_name}</p>
                <p> {points} Points</p>
            </div>

            <div style={styles.clickables}>
                <input style={styles.checkbox} 
                    type="checkbox"
                    checked={checkbox}
                    onChange={() => {
                        setChecked(!check);
                        onToggleCheckbox(story_id, checkbox);}}/>
                <button style={styles.edit} 
                    onMouseEnter={() => setEditIsHovered(true)} 
                    onMouseLeave={() => setEditIsHovered(false)}>
                        Edit
                </button>
                <button style={styles.delete} 
                    onMouseEnter={() => setDeleteIsHovered(true)} 
                    onMouseLeave={() => setDeleteIsHovered(false)} 
                    onClick={() => onDelete(story_id) }>
                        Delete
                </button>                
            </div>
        </div>
    )
}

export default Story;