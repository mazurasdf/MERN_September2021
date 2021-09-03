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

    const lengthError = (value, length) => {
        if(value.length >= length){
            return false;
        }
        return true;
    }

    const allValid = (allForm) => {
        return  !lengthError(allForm.name, 3) &&
                !lengthError(allForm.flavor, 5) &&
                !lengthError(allForm.topping, 5);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(form);
    }

    return(
        <div className="form">
            <h1>Build a sundae! with an easier form</h1>
            <form onSubmit={onSubmitHandler}>
                {/* name, flavor, topping, num scoops, sauce, whipped cream and cherry */}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.name, 3) && form.name.length !== 0 && "Name must have at least 3 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Flavor</label>
                    <input type="text" className="form-control" name="flavor" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.flavor, 5) && form.flavor.length !== 0 && "Flavor must have at least 5 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Topping</label>
                    <input type="text" className="form-control" name="topping" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.topping, 5) && form.topping.length !== 0 && "topping must have at least 5 characters!"}</span>
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

                {
                    allValid(form) ? <input type="submit" className="btn btn-primary btn-lg"/> : <input type="submit" className="btn btn-primary btn-lg" disabled/>
                }
            </form>

            <div>
                <h1>Name: {form.name}</h1>
            </div>
        </div>
    )
}

export default SimpleForm;