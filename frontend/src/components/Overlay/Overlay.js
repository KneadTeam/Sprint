import "./Overlay.css"
import SprintLogo2 from "../../assets/sprint-logo.png"

function Overlay ( { children, isOpen, onClose } ){
    return (
        <div>
           {isOpen ? 
                <div className="overlay">
                    <div className="overlay-bg" onClick={onClose}></div>
                    <div className="overlay-content">
                        <img src={SprintLogo2} alt="sprint logo" className="sprint-logo2" />
                        {children}
                    </div>
                </div> 
            : null}             
        </div>
    )
}

export default Overlay;