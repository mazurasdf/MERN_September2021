import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const StatePage = (props) => {
    const {name} = useParams();
    const [breweries, setBreweries] = useState([]);

    useEffect(()=>{
        axios.get("https://api.openbrewerydb.org/breweries?by_state="+name)
            .then(res => {
                console.log(res.data);
                setBreweries(res.data);
            })
            .catch(err => console.log(err));
    },[name])

    return(
        <div>
            {
                breweries.map((item,i)=>{
                    return <h1 key={i}>{item.name}</h1>
                })
            }
        </div>
    )
}

export default StatePage;