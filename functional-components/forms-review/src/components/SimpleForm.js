import React, { useState } from 'react';

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        date: new Date()
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "date" ? new Date(event.target.value) : event.target.value
        })
    }

    return(
        <div>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Birthday:</label>
                    <input type="date" name="date" className="form-control" onChange={onChangeHandler}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg mt-3"/>

                <h1>Name: {form.name}</h1>
            </form>
        </div>
    )
}



export default SimpleForm;