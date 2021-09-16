import React from 'react';
import Form from '../components/Form';

const Create = (props) => {
    const form = {
        size: "small",
        crust: "",
        sauce: "",
        toppings: [],
        cheese: "",
        numOrders: "",
        readyBy: ""
    }

    return(
        <div>
            <h1>Add an order</h1>
            <Form formData={form} requestType="post" submitURL="http://localhost:8000/api/pizzas/create"/>
        </div>
    )
}

export default Create;