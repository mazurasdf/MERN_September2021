import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Form = (props) => {
    const history = useHistory();

    const [form, setForm] = useState({
        size: props.formData.size,
        crust: props.formData.crust,
        sauce: props.formData.sauce,
        toppings: props.formData.toppings,
        cheese: props.formData.cheese,
        numOrders: props.formData.numOrders,
        readyBy: props.formData.readyBy
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onMultiChange = (event) =>{
        console.log("trying to add topping")

        var options = event.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setForm({
            ...form,
            "toppings": value
        })
      }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios[props.requestType](props.submitURL, form)
            .then(res => {
                console.log(res);

                if(res.data.err){
                    setErrors(res.data.err.errors);
                }
                else{
                    history.push("/");
                }
            })
            .catch(err=> console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <select className="form-select" name="size" onChange={onChangeHandler} value={form.size}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                        <option value="extra large">extra large</option>
                        <option value="sheet">sheet</option>
                    </select>
                    <span className="alert-danger">{errors.size && errors.size.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="crust">Crust</label>
                    <input type="text" name="crust" className="form-control" onChange={onChangeHandler} value={form.crust}/>
                    <span className="alert-danger">{errors.crust && errors.crust.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="sauce">Sauce</label>
                    <input type="text" name="sauce" className="form-control" onChange={onChangeHandler} value={form.sauce}/>
                    <span className="alert-danger">{errors.sauce && errors.sauce.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="cheese">Cheese</label>
                    <input type="text" name="cheese" className="form-control" onChange={onChangeHandler} value={form.cheese}/>
                    <span className="alert-danger">{errors.cheese && errors.cheese.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="toppings">Toppings</label>
                    <select className="form-select" name="toppings" multiple onChange={onMultiChange} value={form.toppings}>
                        <option value="green peppers">green peppers</option>
                        <option value="pepperoni">pepperoni</option>
                        <option value="mushrooms">mushrooms</option>
                        <option value="banana peppers">banana peppers</option>
                        <option value="anchovies">anchovies</option>
                        <option value="rainbow spranks">rainbow spranks</option>
                        <option value="pineapple">pineapple</option>
                        <option value="chicken">chicken</option>
                        <option value="entire whole chicken">entire whole chicken</option>
                        <option value="sausage">sausage</option>
                        <option value="cookie dough">cookie dough</option>
                        <option value="shoe">shoe</option>
                        <option value="grass">grass</option>
                        <option value="socks">socks</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="numOrders">Number of Orders</label>
                    <input type="number" name="numOrders" className="form-control" onChange={onChangeHandler} value={form.numOrders}/>
                    <span className="alert-danger">{errors.numOrders && errors.numOrders.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="readyBy">Ready by:</label>
                    <input type="datetime-local" name="readyBy" className="form-control" onChange={onChangeHandler} value={form.readyBy}/>
                    <span className="alert-danger">{errors.readyBy && errors.readyBy.message}</span>
                </div>

                <input type="submit" className="btn btn-primary btn-lg mt-2"/>
            </form>
        </div>
    )
}

export default Form;