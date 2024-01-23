import "./Overlay.css"
import SprintLogoWBG from "../../assets/sprint-logo-wbg.png"

function Overlay ( { children, isOpen, onClose } ){
    return (
        <div>
           {isOpen ? 
                <div className="overlay">
                    <div className="overlay-bg" onClick={onClose}></div>
                    <div className="overlay-content">
                        <img src={SprintLogoWBG} alt="Sprint Logo" className="sprint-logo-wbg" />
                        {children}
                    </div>
                </div> 
            : null}             
        </div>
    )
}

export default Overlay;