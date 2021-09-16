import React from 'react';
import {Link} from 'react-router-dom';

const PizzaOrder = (props) => {
    return(
        <div className="pizzaOrder">
            <div className="pizzaSection">
                <h3>size: {props.order.size}</h3>
                <h3>crust: {props.order.crust}</h3>
                <h3>sauce: {props.order.sauce}</h3>
                <h3>cheese: {props.order.cheese}</h3>
                <h3>number of orders: {props.order.numOrders}</h3>
            </div>

            <div className="pizzaSection">
                <h3>toppings:</h3>
                <ul>
                    {
                        props.order.toppings.map((item, i)=> {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
            </div>

            <div className="pizzaSection">
                <h6>ready by: {new Date(props.order.readyBy).toLocaleString()}</h6>
                <Link to="" className="btn btn-primary">View</Link>
                <Link to={`/pizzas/${props.order._id}/edit`} className="btn btn-warning">Edit</Link>
                <Link to="" className="btn btn-danger">Fulfilled</Link>
            </div>
        </div>
    )
}

export default PizzaOrder;