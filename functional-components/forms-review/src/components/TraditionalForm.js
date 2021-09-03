import React, { useState } from 'react';

const TraditionalForm = (props) => {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState();

    return(
        <div>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Birthday:</label>
                    <input type="date" className="form-control" onChange={(event=>setBirthday(event.target.value))}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg mt-3"/>

                <h1>Name: {name}</h1>
            </form>
        </div>
    )
}



export default TraditionalForm;