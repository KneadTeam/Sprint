function Overlay ( { children, isOpen } ){
    return (
        <div>
           {isOpen ? 
                <div className="overlay">
                    <div className="overlay-bg"></div>
                    {children}
                </div> 
            : null}             
        </div>
    )
}

export default Overlay;