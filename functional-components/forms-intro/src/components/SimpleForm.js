import React, {useState} from 'react';

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        numScoops: 0,
        sauce: "",
        topping: "",
        whipped: false,
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }

    return(
        <div className="form">
            <h1>Build a sundae! with an easier form</h1>
            <form>
                {/* name, flavor, topping, num scoops, sauce, whipped cream and cherry */}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Flavor</label>
                    <input type="text" className="form-control" name="flavor" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Topping</label>
                    <input type="text" className="form-control" name="topping" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Number of Scoops</label>
                    <input type="number" className="form-control" name="numScoops" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Sauce</label>
                    <input type="text" className="form-control" name="sauce" onChange={onChangeHandler}/>
                </div>

                <div>
                    <label>Whipped cream and cherry?</label>
                    <input type="checkbox" name="whipped" onChange={onChangeHandler} />
                </div>

                <input type="submit" className="btn btn-primary btn-lg" onChange={onChangeHandler}/>
            </form>

            <div>
                <h1>Name: {form.name}</h1>
            </div>
        </div>
    )
}

export default SimpleForm;