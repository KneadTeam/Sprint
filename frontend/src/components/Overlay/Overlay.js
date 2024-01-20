function Overlay ( { isOpen, onClose } ){
    return (
        <div>
           {isOpen ? 
            <p>Overlay Test</p> 
            : null}             
        </div>
    )
}

export default Overlay;