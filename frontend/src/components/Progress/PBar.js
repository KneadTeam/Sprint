import Overlay from "../Overlay/Overlay";

function PBar() {
    return (
        <div>
            <h1>PROJECT PROGRESS</h1>
            {/* Progress Bar goes here */}
            <p>
                |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| &emsp;
                <button>Add User Story</button>
                <Overlay isOpen={true}></Overlay>
            </p>
        </div>
    )
}

export default PBar;