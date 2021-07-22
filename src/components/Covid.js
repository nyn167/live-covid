import { useEffect, useState } from "react";
import React from 'react';

const Covid = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div className="container">
            <div className="heading-tag">
                <div className="head"> Covid-19 Tracker</div>
                <div className="live"><span>🔴</span>  LIVE</div>
            </div>

            <ul>
                <li>
                    <div className="card1">
                        <div className="result">India</div>
                        <div className="indicator">Our Country</div>
                    </div>
                </li>
                <li>
                    <div className="card2">
                        <div className="result"> {data.active} </div>
                        <div className="indicator">Active Cases</div>
                    </div>
                </li>
                <li>
                    <div className="card3">
                        <div className="result"> {data.confirmed} </div>
                        <div className="indicator">Confirm Cases</div>
                    </div>
                </li>
                <li>
                    <div className="card4">
                        <div className="result">{data.deaths}</div>
                        <div className="indicator">No. of Deaths</div>
                    </div>
                </li>
                <li>
                    <div className="card5">
                        <div className="result">{data.recovered}</div>
                        <div className="indicator">Recovered Cases</div>
                    </div>
                </li>
                <li>
                    <div className="card6">
                        <div className="result">{data.lastupdatedtime}</div>
                        <div className="indicator">LastTime Updated</div>
                    </div>
                </li>
            </ul>
        </div>
    )

}

export default Covid;
