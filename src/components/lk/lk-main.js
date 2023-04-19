import React, {useState} from 'react';
import './lk-main.sass'
import axios from "axios";

const LkMain = (props) => {
const [tickets, setTickets] = useState([])

const getTickets = () => {
    axios.get('http://localhost')
        .then( res => {
            setTickets(res.data)
            }
        )
}
const getUserData = () => {
    axios.get('http://localhost')
        .then( res => {
            setTickets(res.data)
            }
        )
}
 const ticketss = [
     {artist: "ТехноСтрелка", time:"18 апреля", desc:"международный фестиваль", zone:"VIP"},
     {artist: "ТехноСтрелка", time:"19 апреля", desc:"международный фестиваль", zone:"LUX"},
     {artist: "ТехноСтрелка", time:"20 апреля", desc:"международный фестиваль", zone:"DEFAULT"}
 ]
 const events = [
     {artist: "ТехноСтрелка", time:"18 апреля", desc:"международный фестиваль"}
 ]

    return (
        <main className="lk-main">
            <div className="lk-container">
                <h2 className="lk-title">Билеты</h2>
                <div className="lk-item">
                <table className="lk-table">
                    <thead className="lk-table-header">
                    <tr>
                        <th className="lk-table-title">artist</th>
                        <th className="lk-table-title">description</th>
                        <th className="lk-table-title">time</th>
                        <th className="lk-table-title lk-table-end">zone</th>
                    </tr>

                    </thead>
                    <tbody>
                    {ticketss.map(data =>
                        <tr className="lk-table-container">
                            <td className="lk-table-item">{data.artist}</td>
                            <td className="lk-table-item">{data.desc}</td>
                            <td className="lk-table-item">{data.time}</td>
                            <td className="lk-table-item lk-table-end">{data.zone}</td>
                        </tr>
                    )}
                </tbody>
                </table>
                </div>
                <h2 className="lk-title">Мероприятия</h2>
                <div className="lk-item">
                    <table className="lk-table">
                        <thead className="lk-table-header">
                        <tr>
                            <th className="lk-table-title">artist</th>
                            <th className="lk-table-title">description</th>
                            <th className="lk-table-title lk-table-end">time</th>
                        </tr>

                        </thead>
                        <tbody>
                        {events.map(data =>
                            <tr className="lk-table-container">
                                <td className="lk-table-item">{data.artist}</td>
                                <td className="lk-table-item">{data.desc}</td>
                                <td className="lk-table-item lk-table-end">{data.time}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default LkMain;