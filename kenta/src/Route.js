import TextBox from "./TextBox"
import React, { useState } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';


const Route = () => {

    const [startLat, setStartLat] = useState(0);
    const [startLong, setStartLong] = useState(0);
    const [goalLat, setGoalLat] = useState(0);
    const [goalLong, setGoalLong] = useState(0);
    
    
    //TODO: Fill in the ? with appropriate names/values for a route.
    //Hint: The defaults for latitudes and longitudes were 0s. What might the default useState value for a route be?
    const [startRoute, setRoute] = useState(null);

    /**
     * Makes an axios request.
     */
    const requestRoute = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            srclat: startLat,
            srclong: startLong,
            destlat: goalLat,
            destlong: goalLong
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import this!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post(
            "http://localhost:4567/route",
            toSend,
            config
        )
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what variable you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setRoute(response.data["route"]);
                console.log(startRoute)
            })

            .catch(function (error) {
                console.log(error);

            });
    }

        return (
            <div className='Route'>
                <header>
                    <h1>This is the header</h1>
                </header>
                <TextBox type="text" text="Start Latitude" change={(e) => setStartLat(e.target.value)} />
                <TextBox type="text" text="Start Longitude" change={(e) => setStartLong(e.target.value)} />
                <TextBox type="text" text="Goal Latitude" change={(e) => setGoalLat(e.target.value)} />
                <TextBox type="text" text="Goal Longitude" change={(e) => setGoalLong(e.target.value)} />
                <AwesomeButton onPress={() => requestRoute(startLat, startLong, goalLat, goalLong)}>Submit!</AwesomeButton>
                {startRoute ?
                    <div>
                Route!: <br/>
                Start: {startRoute[0][0]} Latitude, {startRoute[0][1]} Longitude<br/>
                Stop 1: {startRoute[2][0]} Latitude, {startRoute[2][1]} Longitude <br/>
                Stop 2: {startRoute[3][0]} Latitude, {startRoute[3][1]} Longitude <br/>
                End: {startRoute[1][0]} Latitude, {startRoute[1][1]} Longitude
                    </div> : (null)}
            </div>
        );
    }
    
export default Route;
