import React, {useEffect, useState} from 'react';
import Form from '../components/Form';
import {useParams} from "react-router-dom";
import axios from 'axios';

const Edit = (props) => {
    const {_id} = useParams();
    const [form, setForm] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pizzas/${_id}`)
            .then(res=>{
                setForm(res.data.results);
            })
            .catch(err=> console.log(err))
    })

    return(
        <div>
            <h1>Edit an order {_id}</h1>
            {
                form &&
                <Form formData={form} requestType="patch" submitURL={`http://localhost:8000/api/pizzas/${_id}/update`}/>
            }
        </div>
    )
}

export default Edit;