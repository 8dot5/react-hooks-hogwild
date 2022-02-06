import React, { useState } from 'react';
import HogTile from "./HogTile"

import hogsData from "../porkers_data"



function HogContainer() { 
    const [ hogs, setHogs ] = useState(hogsData)

    //return a array of hogtiles
    // const hogTiles = hogsData.map(hog => <HogTile hog={hog} key={hog.name} Detail/> )
    const hogTiles = hogsData.map(hog => {
        return <HogTile hog={hog} key={hog.name} Detail/>
    })

    return (
        <div>
            <div>
                {/* <FormFilter /> */}
            </div>

            <div className="ui grid container">

                {hogTiles}
            </div>
            

        </div>
    )
}

export default HogContainer;