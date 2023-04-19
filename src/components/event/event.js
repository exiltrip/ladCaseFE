import React, {useEffect, useState} from 'react';
import './event.sass'
import axios from "axios";
const Event = () => {

    const url = new URL(document.location.href);
    const urlID = (url.searchParams.get('id'));
    const [eventData, setEventData] = useState([])
    const [eventDate, setEventDate] = useState()
    const getData = () => {
        axios.get(`http://185.130.44.124:8000/event/list?search=${urlID}`)
            .then(res => {
                setEventData(res.data.results)
                let date = new Date(res.data.results.date_of_the_event)
                setEventDate(date)
                console.log(res.data.results)

            })
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <main className="ev-main">
            {eventData.map(data => <h2 className="ev-title">Событие: {data.name}</h2>)}
            {eventData.map(data => <h2 className="ev-title">Дата: {data.date_of_the_event}</h2>)}

            <h2 className="ev-title">Билеты</h2>
            <div className="ev-ticket-container"></div>
            <div className="ev-title">О меропириятии</div>

            {eventData.map(data => <h2 className="ev-text">{data.description}</h2>)}
        </main>
    );
};

export default Event;