import React, { useState } from 'react';
import HogDetail from "./HogDetail";

// props = is always an obj  {hog: {name: image}}
// went to the hog object and grabbed its keys
function HogTile({ hog: {name, image, greased, weight, specialty, "highest medal achieved": medal } }) {
    const [showDetails, setShowDetails] = useState(false) // set initially to false

    // const { name , image, greased } = hog;
    // console.log(name)
    // console.log(image)
    
    function handleShowDetails() {
        // take our previous state value (showDetails) and set it to the opposite value
        setShowDetails(showDetails => !showDetails)
        //setShowDetails(prevState => !prevState)
    }
    

    // onClick on the entire div
    // <div onClick={handleShowDetails} className="ui four wide column pigTile">
    //     <h3>{name}</h3>
    //     <img className="tile-img" src={image} alt={name} />
    //     {showDetails ? <HogDetail greased={greased} weight={weight} specialty={specialty} /> : null}
    // </div>

    return (

        <div className="ui four wide column pigTile">  
            <h3>{name}</h3>
            <img className="tile-img" src={image} alt={name} />

            <div className="extra-content">
                {/* if showDetails state is true, render our HogDetails component. Otherwise do nothing */}
                {showDetails ? <HogDetail greased={greased} weight={weight} specialty={specialty} /> : null}
                {/* {detailToggle && <HogDetail greased={greased} weight={weight} specialty={specialty} /> } */}   

                {/* if showDetails state is true, change button text to "Hide Details" */}
                <button onClick={handleShowDetails} className="ui button">
                    { showDetails ? "Hide Details" : "Show Details"}
                </button> 
            </div>
            
        </div>
    )
}

export default HogTile; 