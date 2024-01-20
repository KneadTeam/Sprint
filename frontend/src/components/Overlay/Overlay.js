import "./Overlay.css"

function Overlay ( { children, isOpen, onClose } ){
    return (
        <div>
           {isOpen ? 
                <div className="overlay">
                    <div className="overlay-bg" onClick={onClose}></div>
                    <div className="overlay-content">
                        {children}
                    </div>
                </div> 
            : null}             
        </div>
    )
}

export default Overlay;