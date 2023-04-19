import React, {useEffect, useState} from 'react';
import './main.sass'
import * as events from "events";
import {NavLink} from "react-router-dom";
import axios from "axios";
const Main = () => {
    const [events, setEvents] = useState([])
    const getComingEvents = () => {
        axios.get(`http://185.130.44.124:8000/event/list?ordering=-date_of_the_event` )
            .then(res => {
                setEvents(res.data.results)
                console.log(events)
            })
    }
    useEffect(() => {
        getComingEvents()
    }, [])
    return (
        <main className='main'>
            <h2 className="main-title">События в ближайшие дни </h2>
            <div className="main-card-container">
                {events.map(events =>
                    <NavLink className="main-card-item" to={`/event?id=${events.id}`}><div id={events.id}>{events.name}</div></NavLink>
                )}


            </div>
        </main>
    );
};

export default Main;