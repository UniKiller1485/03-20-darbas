import { useState } from "react";


function Dropdown ({title, content}) {

    const [isClosed, setIsClosed] = useState(true);

    return (
        <>
        <div className="Dropdown">
            <h1 onClick={() => {
                setIsClosed(!isClosed);
            }}>{title}</h1>
            <p className={isClosed ? 'hidden' : ''}>{content}</p>
            
        </div>
        </>
    )
}

export default Dropdown;