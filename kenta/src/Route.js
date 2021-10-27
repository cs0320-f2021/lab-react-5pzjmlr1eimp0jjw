import TextBox from "./TextBox"
import React, { useState } from 'react';

const Route = () => {

    const [startLat, setStartLat] = useState(0);
    const [startLong, setStartLong] = useState(0);
    const [goalLat, setGoalLat] = useState(0);
    const [goalLong, setGoalLong] = useState(0);
    
    console.log(startLat)
    
    return (
        <div>
            <header>
             <h1>This is the header</h1>
            </header>
            <TextBox type="text" text="Start Latitude" change={(e) => setStartLat(e.target.value)}/>
            <TextBox type="text" text="Start Longitude" change={(e) => setStartLong(e.target.value)}/>
            <TextBox type="text" text="Goal Latitude" change={(e) => setGoalLat(e.target.value)}/>
            <TextBox type="text" text="Goal Longitude" change={(e) => setGoalLong(e.target.value)}/>
        </div>
    )
}

export default Route
