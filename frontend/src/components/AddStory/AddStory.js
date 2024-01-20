// CONTENTS OF THIS SHOULD BE ON SEPERATE PAGE

function AddStory() {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>User Story</label>
                <input type="text" placeholder="As a [who], I want to [what], so that [why]."/>
            </div>
            <div className='form-control'>
                <label>Difficulty Level</label>
                <input type="number" placeholder="0"/>
            </div>

            <p><input type="submit" value="Save" /> <input type="submit" value="Cancel" /></p>
        </form>
    )
}

export default AddStory;