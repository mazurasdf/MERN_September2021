import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import PizzaOrder from '../components/PizzaOrder';

const Main = (props) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pizzas/all")
        .then(res=>{
            setPizzas(res.data.results);
        })
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <h1>hey it's me!</h1>
            {
                pizzas.map((item, i)=>{
                    return <PizzaOrder order={item} key={i}/>
                })
            }  
        </div>
    )
}

export default Main;