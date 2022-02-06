
import React, { useState } from 'react';

function HogDetail({ greased, weight, specialty }) {
    // const [ delete, setDelete ] = useState("")

    function handleDelete() {
        
    }
    
    return (
        <div>
            <h1>Details</h1>
            <button onClick={handleDelete}>Delete Pig</button>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? "Greasy" : "Not Greasy"}</p>
            <p>Weight: {weight}</p>

        </div>
    )
}

export default HogDetail;