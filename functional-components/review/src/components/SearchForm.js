import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const SearchForm = (props) => {
    const history = useHistory();
    const [searchBy, setSearchBy] = useState("state");
    const [detail, setDetail] = useState("");
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        history.push(`/${searchBy}/${detail}`);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <select className="form-select w-25 mx-auto mb-2" onChange={(event)=>setSearchBy(event.target.value)}>
                    <option value="state">Search by State</option>
                    <option value="city">Search by City</option>
                </select>

                <input type="text" className="w-25 form-control mx-auto" placeholder="search detail" onChange={(event)=>setDetail(event.target.value)}/>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default SearchForm;